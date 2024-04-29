import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './app/store'
import { Provider } from 'react-redux'
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18next.js'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/CatchAllErrorPage.tsx'
import Home from './pages/Home.tsx'
import Account from './pages/Account.tsx'
import CreateAccount from './pages/CreateAccount.tsx'
import Filing from './pages/Filing.tsx'
import Login from './pages/Login.tsx'
import Users from './pages/Users.tsx'
import Root from './pages/Root.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root/>}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<Login/>}
        />
        <Route
          path="filing"
          element={<Filing/>}
        />
        <Route
          path="account"
          element={<Account/>}
        />
        <Route
          path="users"
          element={<Users/>}
        />
        <Route
          path="create"
          element={<CreateAccount/>}
        />

        {/* Not sure if this makes sense */}
        <Route
          path="logout"
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App/>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)
