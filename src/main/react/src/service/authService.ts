import { springUrl } from "../util/CONSTANTS";

const queryAuthStatus = async () => {

    let authStatus = {
        authenticated: false,
        userRole: "NONE"
    }
    
    //Using debug environment
    if (import.meta.env.DEV){
        let cur = "USER"
        if(cur === "NONE"){
           return {
                authenticated: false,
                userRole: "NONE"
           } 
        } else if (cur === "USER"){
            return {
                authenticated: true,
                userRole: "USER"
               } 
        } else if (cur === "ADMIN"){
            return {
                authenticated: true,
                userRole: "ADMIN"
               } 
        }
    }
    
    try {
        const response = await fetch(`${springUrl}/auth/status`);

        if (response.ok) {
            const data = await response.json();
            authStatus = data;
        } else {

        }
    } catch (error) {
        console.error('Error checking authentication status:', error);
    }

    return authStatus;
};

export { queryAuthStatus };
