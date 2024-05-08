import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Account from "../pages/Account";
import ErrorPage from "../pages/ErrorPage";
import CreateAccount from "../pages/CreateAccount";
import Filing from "../pages/Filing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Root from "../pages/Root";
import Users from "../pages/Users";
import { load1099Page, loadAccountCreationPage, loadAccountPage, loadFilingPage, loadFinalCalculation, loadLoginPage, loadLogout, loadMiscPage, loadNavBar, loadPasswordUpdatePage, loadReview, loadUsersPage, loadW2Page } from "./loaders";
import InaccessibleResource from "../pages/InaccessibleResource";
import { attemptAccountCreation, attemptLogin, attemptPasswordChange, attemptProfileEdit, submitForms, submitUserDeletion } from "./actions";
import ChangePassword from "../pages/ChangePassword";
import IntroPage from "../components/filingApp/SubPages/IntroPage";
import FormW2Page from "../components/filingApp/SubPages/FormW2Page";
import ReviewPage from "../components/filingApp/SubPages/ReviewPage";
import TotalReturnsPage from "../components/filingApp/SubPages/TotalReturnPage";
import FormMiscInfoPage from "../components/filingApp/SubPages/FormMiscInfoPage";
import Form1099Page from "../components/filingApp/SubPages/Form1099Page";

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
                <Route
                    path="/filing/w2"
                    element={<FormW2Page/>}
                    loader={loadW2Page}
                />
                <Route
                    path="/filing/1099"
                    element={<Form1099Page/>}
                    loader={load1099Page}
                />
                <Route
                    path="/filing/misc"
                    element={<FormMiscInfoPage/>}
                    loader={loadMiscPage}
                />
                <Route
                    path="/filing/review"
                    element={<ReviewPage/>}
                    loader={loadReview}

                />
                <Route
                    path="/filing/result"
                    element={<TotalReturnsPage/>}
                    loader={loadFinalCalculation}
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
                action={submitUserDeletion}
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