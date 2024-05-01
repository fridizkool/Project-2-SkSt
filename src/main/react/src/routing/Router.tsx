import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Account from "../pages/Account";
import ErrorPage from "../pages/ErrorPage";
import CreateAccount from "../pages/CreateAccount";
import Filing from "../pages/Filing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Root from "../pages/Root";
import Users from "../pages/Users";
import { loadAccountCreationPage, loadAccountPage, loadFilingPage, loadLoginPage, loadNavBar, loadUsersPage } from "./loaders";
import InaccessibleResource from "../pages/InaccessibleResource";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root/>}
        errorElement={<ErrorPage />}
        loader={loadNavBar}

      >
        <Route errorElement={<ErrorPage/>}>
            <Route index element={<Home />} />
            <Route
                path="login"
                element={<Login/>}
                loader={loadLoginPage}
            />
            <Route
                path="filing"
                element={<Filing/>}
                loader={loadFilingPage}
            />
            <Route
                path="account"
                element={<Account/>}
                loader={loadAccountPage}
            />
            <Route
                path="users"
                element={<Users/>}
                loader={loadUsersPage}
            />
            <Route
                path="create"
                element={<CreateAccount/>}
                loader={loadAccountCreationPage}
            />
            <Route
                path="inaccessible"
                element={<InaccessibleResource/>}
            />

            {/* Not sure if this makes sense */}
            <Route
                path="logout"
            />
        </Route>
      </Route>
    )
  );