import { Fieldset, Label, TextInput, Button, Link, Alert } from '@trussworks/react-uswds';
import React, { useEffect, useState } from 'react';
import { Form, useLocation } from 'react-router-dom';


const UpdateProfileForm: React.FC<UserProfileFormProps> = ({ userProfile }: any) => {
    const [editState, isEdit] = useState(false);
    const [showSocial, setShowSocial] = useState(false);

    const [formData, setFormData] = React.useState({
        username: userProfile["username"],
        firstName: userProfile["firstName"],
        lastName: userProfile["lastName"],
        initial: userProfile["initial"],
        suffix: userProfile["suffix"],
        address: userProfile["address"],
        telephoneNumber: userProfile["telephoneNumber"],
        ssn: userProfile["ssn"],
    });

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
                <Fieldset>
                    <Label htmlFor="username">Email </Label>
                    <TextInput type="text" id="username" name="username" value={formData.username} disabled />
                    <Label htmlFor="firstName">First Name</Label>
                    <TextInput type="email" id="firstName" name="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} disabled={!editState} />
                    <Label htmlFor="lastName">Last Name</Label>
                    <TextInput type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} disabled={!editState} />
                    <Label htmlFor="initial">Middle Initial</Label>
                    {/* TODO Just do middle name? */}
                    <TextInput type="text" id="initial" name="initial" value={formData.initial} onChange={(e) => setFormData({ ...formData, initial: e.target.value })} disabled={!editState} />
                    <Label htmlFor="suffix">Suffix</Label>
                    <TextInput type="text" id="suffix" name="suffix" value={formData.suffix} onChange={(e) => setFormData({ ...formData, suffix: e.target.value })} disabled={!editState} />
                    <Label htmlFor="address">Address</Label>
                    <TextInput type="text" id="address" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} disabled={!editState} />
                    <Label htmlFor="social">SSN</Label>
                    <TextInput type={showSocial ? 'text' : 'password'} id="social" name="social" value={formData.ssn} onChange={(e) => setFormData({ ...formData, ssn: e.target.value })} disabled={!editState}></TextInput>
                    <Button title="Show SSN" type="button" className="usa-show-password" aria-controls="social" onClick={(): void => setShowSocial(showSocial => !showSocial)}>
                        {showSocial ? 'Hide SSN' : 'Show SSN'}<br />
                    </Button>
                    <Button type="button" onClick={() => { isEdit(editState => !editState); if (editState) { setShowSocial(false) } }} className="bg-accent-cool-dark">Edit</Button>
                    <Button type="submit" disabled={!editState}>Submit</Button><br />
                    <Link variant="nav" href={'/changepassword'}>Change Password</Link>
                </Fieldset>
            </Form>
        </>

    );
};

export default UpdateProfileForm;
