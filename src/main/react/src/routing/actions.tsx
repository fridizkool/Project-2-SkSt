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