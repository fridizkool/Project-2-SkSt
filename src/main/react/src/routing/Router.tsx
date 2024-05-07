import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Account from "../pages/Account";
import ErrorPage from "../pages/ErrorPage";
import CreateAccount from "../pages/CreateAccount";
import Filing from "../pages/Filing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Root from "../pages/Root";
import Users from "../pages/Users";
import { loadAccountCreationPage, loadAccountPage, loadFilingPage, loadLoginPage, loadLogout, loadNavBar, loadPasswordUpdatePage, loadUsersPage } from "./loaders";
import InaccessibleResource from "../pages/InaccessibleResource";
import { attemptAccountCreation, attemptLogin, attemptPasswordChange, attemptProfileEdit, submitForms } from "./actions";
import ChangePassword from "../pages/ChangePassword";
import IntroPage from "../components/filingApp/SubPages/IntroPage";

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
                action= {attemptLogin}
            />
            <Route
                path="filing"
                element={<Filing/>}
                loader={loadFilingPage}
                action= {submitForms}
            >
                <Route
                    path="/filing/intro"
                    element={<IntroPage/>}
                />
            </Route>
            <Route
                path="account"
                element={<Account/>}
                loader={loadAccountPage}
                action= {attemptProfileEdit}
            />
            <Route
                path="users"
                element={<Users/>}
                loader={loadUsersPage}
            />
            <Route
                path="changepassword"
                element={<ChangePassword/>}
                loader={loadPasswordUpdatePage}
                action= {attemptPasswordChange}
            />
            <Route
                path="create"
                element={<CreateAccount/>}
                loader={loadAccountCreationPage}
                action= {attemptAccountCreation}
            />
            <Route
                path="inaccessible"
                element={<InaccessibleResource/>}
            />

            {/* Not sure if this makes sense */}
            <Route
                path="logout"
                loader={loadLogout}
            />
        </Route>
      </Route>
    )
  );