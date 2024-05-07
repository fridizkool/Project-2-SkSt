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

export async function loadPasswordUpdatePage() {
    const authStatus = await queryAuthStatus();
    if(authStatus.authenticated){
        return null;
    } else {
        return redirect("/");
    }
}

export async function loadFilingPage() {
    const authStatus = await queryAuthStatus();
    if(authStatus.authenticated){

        if(import.meta.env.DEV){
            const dataW2 = [
                {
                  "id": 48,
                  "userId": 8,
                  "employerId": null,
                  "employerInformation": "",
                  "controlNumber": null,
                  "income": 1,
                  "withheldFederal": null,
                  "socialSecurity": null,
                  "withheldSS": null,
                  "medicare": null,
                  "withheldMedicare": null,
                  "socialSecurityTips": null,
                  "allocatedTips": null,
                  "dependentCare": null,
                  "nonqualifiedPlan": "",
                  "deferrals": "",
                  "statutory": false,
                  "retirement": false,
                  "sickPay": false,
                  "other": ""
                },
                {
                  "id": 49,
                  "userId": 8,
                  "employerId": null,
                  "employerInformation": "",
                  "controlNumber": null,
                  "income": 2,
                  "withheldFederal": null,
                  "socialSecurity": null,
                  "withheldSS": null,
                  "medicare": null,
                  "withheldMedicare": null,
                  "socialSecurityTips": null,
                  "allocatedTips": null,
                  "dependentCare": null,
                  "nonqualifiedPlan": "",
                  "deferrals": "",
                  "statutory": false,
                  "retirement": false,
                  "sickPay": false,
                  "other": ""
                },
                {
                  "id": 50,
                  "userId": 8,
                  "employerId": null,
                  "employerInformation": "",
                  "controlNumber": null,
                  "income": 3,
                  "withheldFederal": null,
                  "socialSecurity": null,
                  "withheldSS": null,
                  "medicare": null,
                  "withheldMedicare": null,
                  "socialSecurityTips": null,
                  "allocatedTips": null,
                  "dependentCare": null,
                  "nonqualifiedPlan": "",
                  "deferrals": "",
                  "statutory": false,
                  "retirement": false,
                  "sickPay": false,
                  "other": ""
                }
              ]
            const data1099 = [
                {
                    "id": 123,
                    "userId": 8,
                    "employerId": "ABC123",
                    "employerInformation": "Example Company",
                    "controlNumber": "XYZ789",
                    "income": 50000,
                    "withheldFederal": 6000,
                    "socialSecurity": 4000,
                    "withheldSS": 500,
                    "medicare": 1000,
                    "withheldMedicare": 150,
                    "socialSecurityTips": 200,
                    "allocatedTips": 100,
                    "dependentCare": 2000,
                    "nonqualifiedPlan": "Some nonqualified plan info",
                    "deferrals": "Some deferrals info",
                    "statutory": true,
                    "retirement": false,
                    "sickPay": true,
                    "other": "Some other details"
                },
                {
                    "id": 123,
                    "userId": 8,
                    "employerId": "ABC123",
                    "employerInformation": "Example Company",
                    "controlNumber": "XYZ789",
                    "income": 50000,
                    "withheldFederal": 6000,
                    "socialSecurity": 4000,
                    "withheldSS": 500,
                    "medicare": 1000,
                    "withheldMedicare": 150,
                    "socialSecurityTips": 200,
                    "allocatedTips": 100,
                    "dependentCare": 2000,
                    "nonqualifiedPlan": "Some nonqualified plan info",
                    "deferrals": "Some deferrals info",
                    "statutory": true,
                    "retirement": false,
                    "sickPay": true,
                    "other": "Some other details"
                },
                {
                    "id": 123,
                    "userId": 8,
                    "employerId": "ABC123",
                    "employerInformation": "Example Company",
                    "controlNumber": "XYZ789",
                    "income": 50000,
                    "withheldFederal": 6000,
                    "socialSecurity": 4000,
                    "withheldSS": 500,
                    "medicare": 1000,
                    "withheldMedicare": 150,
                    "socialSecurityTips": 200,
                    "allocatedTips": 100,
                    "dependentCare": 2000,
                    "nonqualifiedPlan": "Some nonqualified plan info",
                    "deferrals": "Some deferrals info",
                    "statutory": true,
                    "retirement": false,
                    "sickPay": true,
                    "other": "Some other details"
                }                                
                
            ]
            const dataMisc = [
                {
                    "id": 123,
                    "userId": 8
                }                                
                
            ]
            return (
                // [[], [], []]
                [dataW2, data1099, dataMisc]
            )
        }
        const formw2 = await fetch('/getAllW2', {
            method: 'GET',
        });

        const form1099 = await fetch('/getAll1099', {
            method: 'GET',
        });

        const formmisc = await fetch('/getMisc', {
            method: 'GET',
        });
        
        try {
            const formw2JSON = await formw2.json();
            const form1099JSON = await form1099.json();
            const formmiscJSON = await formmisc.json();

            
            return [formw2JSON, form1099JSON, formmiscJSON];
        } catch (e) {
            return redirect("/error");
        }
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
                    "username": "null",
                    "password": "null",
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
