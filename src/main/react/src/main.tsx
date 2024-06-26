import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18next.js'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routing/Router.tsx'
import { Provider } from 'react-redux'
import store from './util/redux/store.js'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <I18nextProvider i18n={i18n}>
          <App/>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
)
