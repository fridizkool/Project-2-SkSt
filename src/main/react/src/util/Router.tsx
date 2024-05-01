import { createBrowserRouter, createRoutesFromElements, redirect, Route } from "react-router-dom";
import Account from "../pages/Account";
import ErrorPage from "../pages/CatchAllErrorPage";
import CreateAccount from "../pages/CreateAccount";
import Filing from "../pages/Filing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Root from "../pages/Root";
import Users from "../pages/Users";
import { allowUsersAndAbove } from "../service/authRouteService";
import { queryAuthStatus } from "../service/authService";

export async function loadLoginPage() {
    const authStatus = await queryAuthStatus();
    if(authStatus.authenticated){
        return redirect("/");
    }
}

export async function loadFilingPage() {
    const authStatus = await queryAuthStatus();
    if(authStatus.authenticated){
        return null;
    }
}


export async function loadAccountPage() {
    const authStatus = await queryAuthStatus();
    
    if(authStatus.authenticated){

        //TODO GET user information from server and return it

        return null;
    }
}

export async function loadUsersPage() {
    const authStatus = await queryAuthStatus();
    
    if(authStatus.authenticated && authStatus.userRole === "ADMIN"){

        //TODO GET user information from server and return it

        return null;
    } else {
        return redirect("/error");
    }
}

export async function loadAccountCreationPage() {
    const authStatus = await queryAuthStatus();
    
    if(authStatus.authenticated){
        return redirect("/");        
    } else {
        return null;
    }
}

export const router = createBrowserRouter(
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
                path="error"
                element={<ErrorPage/>}
            />

            {/* Not sure if this makes sense */}
            <Route
                path="logout"
            />
        </Route>
      </Route>
    )
  );