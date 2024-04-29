import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import Filing from './pages/Filing.js'
import { Header, Title } from '@trussworks/react-uswds'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount.js';
import ContentNotFound from './pages/ContentNotFound.js';
import Account from './pages/Account.js';
import Users from './pages/Users.js';
import { NavSystem } from './components/nav/NavSystem.js';

function App() {


  return (
    <>
      <Header basic extended className='pin-top position-sticky bg-base-lightest z-top padding-top-05 padding-left-1'>
        <Title id="extended-logo" className='padding-0'>
          <a href="/" title="home" aria-label="Home">Clairevoyant Tax Prep</a>
        </Title>
        {/* <Grid col={12}>
          <PrimaryNav items={navItems}></PrimaryNav>
        </Grid> */}

      </Header>

      <NavSystem/>

      <main id="main-content">
        <div className="height-viewport">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
                <Route path='/filing' element={<Filing />} />
                <Route path='/account' element={<Account />} />
                <Route path='/users' element={<Users/>} />
              <Route path="/404" element={<ContentNotFound />} />
              <Route path="/create" element={<CreateAccount />} />
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
