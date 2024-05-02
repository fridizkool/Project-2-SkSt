import { Button, DatePicker, Fieldset, Form, Grid, GridContainer, Label, Link, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Account() {      
    const [editState, isEdit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showSocial, setShowSocial] = useState(false);

    const userProfile: UserProfile = useLoaderData() as UserProfile;

    return (
        <>
            <GridContainer className='usa-section'>
                <Grid className='flex-justify-center' row>
                    <Grid col={12}>
                        <div className="bg-base-lightest padding-y-3 padding-x-5 border border-base-lighter">
                            <Form onSubmit={() => { }} large>
                                <Fieldset>
                                    <Label htmlFor="username">Username</Label>
                                    <TextInput type="text" id="username" name="username" disabled={!editState} />
                                    <Label htmlFor="address">Address</Label>
                                    <TextInput type="text" id="address" name="address" disabled={!editState} />
                                    <Label htmlFor="birthday" id='birthdayLabel'>Birthday</Label>
                                    <DatePicker id="birthday" name="birthday" aria-labelledby='birthdayLabel' disabled={!editState}></DatePicker>
                                    <Label htmlFor="social">SSN</Label>
                                    <TextInput type={showSocial ? 'text' : 'password'} id="social" name="social" disabled></TextInput>
                                    <Button title="Show SSN" type="button" className="usa-show-password" aria-controls="social" onClick={(): void => setShowSocial(showSocial => !showSocial)}>
                                        {showSocial ? 'Hide SSN' : 'Show SSN'}<br />
                                    </Button>
                                    <Link variant="nav" href={'/changepassword'}>Change Password</Link>
                                    <Button type="button" onClick={() => { isEdit(editState => !editState); if(editState){setShowPassword(false); setShowSocial(false)} }} className="bg-accent-cool-dark">Edit</Button><Button type="submit" disabled={!editState}>Submit</Button>
                                </Fieldset>
                            </Form>
                        </div>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    )
}