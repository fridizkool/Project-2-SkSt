import { Alert, Button, Fieldset, Label, TextInput } from "@trussworks/react-uswds";
import { useState, useEffect } from "react";
import { Form, useLocation } from "react-router-dom";

const PasswordChangeForm = () => {
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
            <Form method="put">
                <Fieldset legend="">

                <Label htmlFor="password-create-account">
                        Update password{' '}
                        <abbr title="required" className="usa-label--required">
                          *
                        </abbr>
                      </Label>
                      <TextInput id="password-create-account" name="password" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />

                      <button title="Show password" type="button" className="usa-show-password" aria-controls="password-create-account password-create-account-confirm" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                        {showPassword ? 'Hide password' : 'Show password'}
                      </button>

                      <Label htmlFor="password-create-account-confirm">
                        Re-type password{' '}
                        <abbr title="required" className="usa-label--required">
                          *
                        </abbr>
                      </Label>
                      <TextInput id="password-create-account-confirm" name="password-confirm" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />


                    <Button type='submit'>Sign in</Button>
                </Fieldset>
            </Form>
        </>
    );
};

export default PasswordChangeForm;
