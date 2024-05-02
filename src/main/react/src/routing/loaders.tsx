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
        
        // DEBUG In dev mode with no server, return this:
        if (import.meta.env.DEV){
            return (
                {
                    "id": 6,
                    "username": "asd@asd.s",
                    "password": "$2a$10$tGhXwvF5bSrdvp47Au.CROIjb9Glp4I0eH5Z6vhD7llU60NCVdnDa",
                    "role": "ROLE_USER",
                    "firstName": "first",
                    "lastName": "last",
                    "initial": "initial",
                    "suffix": "suffix",
                    "address": "address",
                    "telephoneNumber": "telephoneNumber",
                    "ssn": "ssn",
                    "enabled": true,
                    "authorities": [
                      {
                        "authority": "ROLE_USER"
                      }
                    ],
                    "credentialsNonExpired": true,
                    "accountNonExpired": true,
                    "accountNonLocked": true
                  }
            )
        }

        const response = await fetch('/user', {
            method: 'GET',
        });
        
        // Convert the response to JSON
        try {
            const responseJSON = await response.json();
            return responseJSON;
        } catch (e) {
            return redirect("/error");
        }
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
