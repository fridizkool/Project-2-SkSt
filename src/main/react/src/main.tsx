import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './app/store'
import { Provider } from 'react-redux'
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18next.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App/>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)
