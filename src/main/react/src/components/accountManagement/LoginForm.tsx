import { Fieldset, Label, TextInput, Button} from '@trussworks/react-uswds';
import { useState } from 'react';
import { Form } from 'react-router-dom';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

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
