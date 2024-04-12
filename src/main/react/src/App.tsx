import './App.css'
import { Counter } from './features/counter/Counter.jsx'
import { LandingPage } from './components/LandingPage.js'
import {InternationalizationHello} from './components/InternationalizationHello.js'
import Filing from './pages/Filing.js'

function App() {
  return (
    <>
      <Filing />
      {/* <Counter />
      <LandingPage />
      <InternationalizationHello /> */}
    </>
  )
}

export default App
