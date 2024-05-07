import { Fieldset, Label, TextInput, Button, Alert } from '@trussworks/react-uswds';
import { useEffect, useState } from 'react';
import { Form, useLocation } from 'react-router-dom';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get('error');

    useEffect(() => {
        setError(errorMessage);
    })
    return (
        <>
            {error && (
                <Alert type="error" heading="Error status" headingLevel="h4">
                    {error}
                </Alert>
            )}
            <Form method="post">
                <Fieldset legend="">
                    <div className='grid justify-items-start'>
                        <Label htmlFor="username-in">Email</Label>
                        <TextInput id="username-in" type="text" name='username' required />
                        <Label htmlFor="password-in">Password</Label>
                        <TextInput id="password-in" type={showPassword ? 'text' : 'password'} name='password' required />
                        <Button title="Show password" type="button" className="usa-show-password justify-self-end" aria-controls="password-in" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                            {showPassword ? 'Hide password' : 'Show password'}
                        </Button>
                        <Button type='submit' className="">Sign in</Button>
                    </div>
                </Fieldset>
            </Form>
        </>
    );
};

export default LoginForm;
