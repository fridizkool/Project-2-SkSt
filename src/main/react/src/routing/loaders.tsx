import { redirect } from "react-router-dom";
import { queryAuthStatus } from "../service/authService";
import { handleLogout } from "../service/logoutService";

export async function loadNavBar() {
    const navOptions = {
        showUserPrivilegedInfo: false,
        showAdminPriviledgedInfo: false
    }
    const authStatus = await queryAuthStatus();
    
    if(authStatus.authenticated) navOptions.showUserPrivilegedInfo = true;        

    if(authStatus.userRole === "ADMIN") navOptions.showAdminPriviledgedInfo = true;        

    return navOptions;
}


export async function loadLoginPage() {
    const authStatus = await queryAuthStatus();
    if(authStatus.authenticated){
        return redirect("/");
    } else {
        return null
    }
}

export async function loadFilingPage() {
    const authStatus = await queryAuthStatus();
    if(authStatus.authenticated){
        return null;
    } else {
        return redirect("/login");
    }
}


export async function loadAccountPage() {
    const authStatus = await queryAuthStatus();
    
    if(authStatus.authenticated){
        //TODO GET user information from server and return it
        return null;
    } else {        
        return redirect("/inaccessible");
    }
}

export async function loadUsersPage() {
    const authStatus = await queryAuthStatus();
    
    if(authStatus.authenticated && authStatus.userRole === "ADMIN"){

        //TODO GET user information from server and return it

        return null;
    } else {
        return redirect("/inaccessible");
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

export async function loadLogout() {   
    let isLoggedOut = await handleLogout();

    if(isLoggedOut){
        return redirect('/');
    } else {
        return redirect('/error');
    }
}
