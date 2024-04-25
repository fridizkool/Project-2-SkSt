import { Fieldset, Label, TextInput, Button, Form} from '@trussworks/react-uswds';
import { FormEvent, useState } from 'react';

const YourComponent = () => {
    const [showPassword, setShowPassword] = useState(false);

    const submitInfo = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        const formData = new FormData(event.currentTarget); // Create FormData object from the form
        
        try {
            // Retrieve CSRF token from the page (assuming it's available as a meta tag with name="_csrf")
            // const csrfToken = document.querySelector<HTMLInputElement>('meta[name="_csrf"]')?.content;

            // if (!csrfToken) {
            //     console.error('CSRF token not found');
            //     return;
            // }

            // Add CSRF token to headers
            const headers = new Headers();
            // headers.append('X-CSRF-TOKEN', csrfToken);

            // Send a POST request to a relative route using Fetch API
            const response = await fetch('/login', {
                method: 'POST',
                headers: headers,
                body: formData
            });
            
            // Handle the response as needed
            if (response.ok) {
                // Success handling
            } else {
                // Error handling
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };



    return (
        <Form onSubmit={submitInfo}>
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

export default YourComponent;
