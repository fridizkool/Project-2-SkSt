import { Alert, Button, Checkbox, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

export default function CreateAccount() {
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    function isUserValid(formData:any){
        if(
            formData.get("password") === formData.get("password-confirm") 
            && formData.get("terms-and-conditions") === "on"
        ){
            setError(null);
            return true;
        } else {
            return false;
        }
    }

    function submitAccount(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        if (isUserValid(formData)){
            // Submit post request
            try {
                // fetch request
                // On success, redirect to desired page
            } catch (e:any) {
                setError(e.message);
            }
        } else {
            // Redirect with error
            setError("Passwords do not match");
        }
    }

    return (
        <>
            {error && (
                <Alert type="error" heading="Error status" headingLevel="h4">
                Error
              </Alert>
            )}
            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                  <h1 className="margin-bottom-0">Create account</h1>
                  <Form onSubmit={submitAccount}>
                    <Fieldset legend="Get started with an account.">
                      <p>
                        <abbr title="required" className="usa-hint usa-hint--required">
                          *
                        </abbr>{' '}
                        indicates a required field.
                      </p>

                      <Label htmlFor="email">
                        Email address{' '}
                        <abbr title="required" className="usa-label--required">
                          *
                        </abbr>
                      </Label>
                      <TextInput id="email" name="email" type="email" autoCapitalize="off" autoCorrect="off" required={true} />

                      <Label htmlFor="password-create-account">
                        Create password{' '}
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

                      <Checkbox id="terms-and-conditions" name="terms-and-conditions" className="margin-y-3" required={true} label={"TODO_TERMS&CONDITIONS"} />

                      <Button type="submit">Create account</Button>
                    </Fieldset>
                  </Form>
                </div>
        </>
    )
}