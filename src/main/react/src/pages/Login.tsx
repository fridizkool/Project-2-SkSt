import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Title, Header, Grid, Accordion, Form, Fieldset, Label, Radio, Card, GridContainer, DatePicker, TextInput, Button, Link } from '@trussworks/react-uswds';
import { useState } from 'react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [validLogin, setValidLogin] = useState(true);

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        {/*login work*/}
    }

    return (
        <>
            <GridContainer className='usa-section'>
                <Grid row className='flex-justify-center'>
                    <Grid col={12}>
                        <div className="bg-base-lightest padding-y-3 padding-x-5 border border-base-lighter">
                            <h1>Sign in</h1>
                            <Grid row>
                                <Grid col={6}>
                                    <Form onSubmit={() => { }}>
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
                                </Grid>
                                <Grid col={6}>
                                    <Card>SSO</Card>
                                </Grid>
                            </Grid>

                        </div>
                        <p className="text-center">
                            {"Don't have an account? "}
                            <Link href="/create">Create your account now</Link>.
                        </p>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    );
}