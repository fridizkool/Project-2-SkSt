import './App.css'
import { Counter } from './features/counter/Counter.jsx'
import { LandingPage } from './components/LandingPage.js'
import {InternationalizationHello} from './components/InternationalizationHello.js'

function App() {
  return (
    <>
      <Counter/>
      <LandingPage/>
      <InternationalizationHello/>
    </>
  )
}

export default App
