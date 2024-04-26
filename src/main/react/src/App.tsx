import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import Filing from './pages/Filing.js'
import { Grid, Header, Link, PrimaryNav, Title } from '@trussworks/react-uswds'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount.js';
import PrivateRoutes from './components/PrivateRoutes.js';

function App() {
  const navItems = [
    <Link variant="nav" href={'/'}>Home</Link>,
    <Link variant="nav" href={'/login'}>Login</Link>,
    <Link variant="nav" href={'/filing'}>Calculator</Link>  //TODO only on auth available
  ];

  return (
    <>
      <Header basic extended className='pin-top position-sticky bg-base-lightest z-top padding-top-05 padding-left-1'>
        <Title id="extended-logo" className='padding-0'>
          <a href="/" title="home" aria-label="Home">Clairevoyant Tax Prep</a>
        </Title>
        <Grid col={12}>
          <PrimaryNav items={navItems}></PrimaryNav>
        </Grid>
      </Header>
      <main id="main-content">
        <div className="height-viewport">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route element={<PrivateRoutes/>}>
                  <Route path='/filing' element={<Filing/>} />
              </Route>
              <Route path="/create" element={<CreateAccount />}/>
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      {/* <Counter />
      <InternationalizationHello /> */}
    </>
  )
}

export default App
