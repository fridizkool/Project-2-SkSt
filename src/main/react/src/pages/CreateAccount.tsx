import { Button, Card, Fieldset, Form, Grid, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

export default function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false);
    const [matching, setMatching] = useState(true);

    function submitAccount(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (formData.get("password") != formData.get("password-check")) {
            setMatching(false);
            return;
        }
        setMatching(true);
    }
    
    return (
        <>
            <GridContainer className='usa-section'>
                <Grid row className='flex-justify-center'>
                    <Grid col={12}>
                        <div className="bg-base-lightest padding-y-3 padding-x-5 border border-base-lighter">
                            <h1>Create Account</h1>
                            <Grid row>
                                <Grid col={6}>
                                    <Form onSubmit={submitAccount}>
                                        <Fieldset legend="">
                                            <Label htmlFor="username-in">Username {' '}
                                                <abbr title="required" className="usa-label--required">
                                                    *
                                                </abbr>
                                            </Label>
                                            <TextInput id="username-in" type="text" name='username' required />
                                            <Label htmlFor="password-in">Password {' '}
                                                <abbr title="required" className="usa-label--required">
                                                    *
                                                </abbr>
                                            </Label>
                                            <TextInput id="password-in" type={showPassword ? 'text' : 'password'} name='password' required />
                                            <Label htmlFor="password-check-in">Re-type password {' '}
                                                <abbr title="required" className="usa-label--required">
                                                    * {matching ? '' : 'Passwords must match'}  {/*passwords matching state*/}
                                                </abbr>
                                            </Label>
                                            <TextInput id="password-check-in" type={showPassword ? 'text' : 'password'} name='password-check' required />
                                            <Button title="Show password" type="button" className="usa-show-password" aria-controls="password-sign-in" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                                                {showPassword ? 'Hide password' : 'Show password'}
                                            </Button>
                                            <Button type='submit'>Create Account</Button>
                                        </Fieldset>
                                    </Form>
                                </Grid>
                                <Grid col={6}>
                                    <Card>SSO stuff</Card>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    )
}