import { redirect } from "react-router-dom";
import { queryAuthStatus } from "../service/authService";

export async function attemptLogin({ request }: { request: any, params: any }) {
    let formData = await request.formData();
    
    try {
        //TODO Add CSRF token to header
        const headers = new Headers();

        const response = await fetch('/login', {
            method: 'POST',
            headers: headers,
            body: formData
        });

        if (response.status === 200) {
            // Check authentication status after successful login
            const authStatus = await queryAuthStatus();
            if (authStatus.authenticated) {
                // Navigate to the authenticated user's dashboard or home page
                return redirect("/")
                
            } else {
                // Handle case where user is not authenticated after login
                return redirect("/login?error=true")
            }
        } else {
            // Handle other status codes (e.g., login failed)
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }

}

export async function attemptAccountCreation({ request }: { request: any, params: any }) {
    let formData = await request.formData();
    
   function isUserValid(formData:any){
        if(
            formData.get("password") === formData.get("password-confirm") 
            && formData.get("terms-and-conditions") === "on"
        ){
            return true;
        } else {
            return false;
        }
    }


    // TODO Deal with potential user overwrite on backend
    if(isUserValid(formData)){
        try {

            const modifiedFormData = new FormData();
            for (let [key, value] of formData.entries()) {
                if (key === "password" || key === "username") {
                    modifiedFormData.append(key, value);
                }
            }

            const jsonObject: any = {};
            formData.forEach((value: any, key: any) => {
                if (key === "password" || key === "username") {
                    jsonObject[key] = value;
                }
            });

            const headers = {
                'Content-Type': 'application/json',
            };    
            const response = await fetch('/auth/register/user', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(jsonObject)
            });
    
            if (response.status === 201) {
                // Check authentication status after successful login
                return redirect("/login")
            } else {
                // Handle other status codes (e.g., login failed)
                return redirect("/create?error=true")
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            return redirect("/create?error=true")
        }
    } else {
        return redirect("/create?error=true")
    }
    

}