import { Fieldset, Label, TextInput, Button} from '@trussworks/react-uswds';
import { useState } from 'react';
import { Form } from 'react-router-dom';
// import { queryAuthStatus } from '../../service/authService';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();
    
    // const submitInfo = async (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault(); 
        
    //     const formData = new FormData(event.currentTarget); // Create FormData object from the form
        
    //     try {
    //         //TODO Add CSRF token to header
    //         const headers = new Headers();

    //         const response = await fetch('/login', {
    //             method: 'POST',
    //             headers: headers,
    //             body: formData
    //         });

    //         if (response.status === 200) {
    //             // Check authentication status after successful login
    //             const authStatus = await queryAuthStatus();
    //             if (authStatus.authenticated) {
    //                 // Navigate to the authenticated user's dashboard or home page
    //                 navigate('/');
                    
    //             } else {
    //                 // Handle case where user is not authenticated after login
    //                 navigate('/login?error=true');
    //                 console.error('User is not authenticated after login');
    //             }
    //         } else {
    //             // Handle other status codes (e.g., login failed)
    //         }
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };

    return (
        <Form method="post">
            <Fieldset legend="">
                <Label htmlFor="username-in">Username</Label>
                <TextInput id="username-in" type="text" name='username' required />
                <Label htmlFor="password-in">Password</Label>
                <TextInput id="password-in" type={showPassword ? 'text' : 'password'} name='password' required />
                <Button title="Show password" type="button" className="usa-show-password" aria-controls="password-sign-in" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                    {showPassword ? 'Hide password' : 'Show password'}
                </Button>
                <Button type='submit'>Sign in</Button>
            </Fieldset>
        </Form>
    );
};

export default LoginForm;
