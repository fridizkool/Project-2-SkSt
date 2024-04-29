import { Button, Card, DatePicker, Fieldset, Form, Grid, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

export default function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false);
    const [matching, setMatching] = useState(true);
    const [showSocial, setShowSocial] = useState(false);

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
                                            <Label htmlFor="address">Address {' '}
                                                <abbr title="required" className="usa-label--required">
                                                    *
                                                </abbr>
                                            </Label>
                                            <TextInput type="text" id="address" name="address" required />
                                            <Label htmlFor="birthday" id='birthdayLabel'>Birthday {' '}
                                                <abbr title="required" className="usa-label--required">
                                                    *
                                                </abbr>
                                            </Label>
                                            <DatePicker id="birthday" name="birthday" required></DatePicker>
                                            <Label htmlFor="social">SSN {' '}
                                                <abbr title="required" className="usa-label--required">
                                                    *
                                                </abbr>
                                            </Label>
                                            <TextInput type={showSocial ? 'text' : 'password'} id="social" name="social" required></TextInput>
                                            <Button title="Show SSN" type="button" className="usa-show-password" aria-controls="social" onClick={(): void => setShowSocial(showSocial => !showSocial)}>
                                                {showSocial ? 'Hide SSN' : 'Show SSN'}<br />
                                            </Button>
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
                                    {/* <Card>SSO stuff</Card> */}
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    )
}