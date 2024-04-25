import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Counter } from './features/counter/Counter.jsx'
import { LandingPage } from './components/LandingPage.js'
import { InternationalizationHello } from './components/InternationalizationHello.js'
import Filing from './pages/Filing.js'
import { Grid, GridContainer, Header, Link, NavMenuButton, PrimaryNav, Title } from '@trussworks/react-uswds'
import { useState } from 'react'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount.js';

function App() {
  const [authenticated, setAuthenticated] = useState(0);
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
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/filing" element={<Filing />}></Route>
              <Route path="/create" element={<CreateAccount />}></Route>
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
