import { Fieldset, Label, TextInput, DatePicker, Button, Link } from '@trussworks/react-uswds';
import React, { useState } from 'react';
import { Form, redirect } from 'react-router-dom';

  
const UpdateProfileForm: React.FC<UserProfileFormProps> = ({userProfile}: any) => {
    const [editState, isEdit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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
    

    // Handle form input change
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };


    return (
        <Form onSubmit={() => {}}>
            <Fieldset>
                <Label htmlFor="username">Username</Label>
                <TextInput type="text" id="username" name="username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} disabled={!editState} />
                <Label htmlFor="firstName">First Name</Label>
                <TextInput type="text" id="firstName" name="firstName" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} disabled={!editState} />
                <Label htmlFor="lastName">Last Name</Label>
                <TextInput type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} disabled={!editState} />
                <Label htmlFor="initial">Initial</Label>
                <TextInput type="text" id="initial" name="initial" value={formData.initial} onChange={(e) => setFormData({...formData, initial: e.target.value})} disabled={!editState} />
                <Label htmlFor="suffix">Suffix</Label>
                <TextInput type="text" id="suffix" name="suffix" value={formData.suffix} onChange={(e) => setFormData({...formData, suffix: e.target.value})} disabled={!editState} />
                <Label htmlFor="address">Address</Label>
                <TextInput type="text" id="address" name="address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} disabled={!editState} />
                {/* <Label htmlFor="birthday" id='birthdayLabel'>Birthday</Label>
                <DatePicker id="birthday" name="birthday" aria-labelledby='birthdayLabel' disabled={!editState}></DatePicker> */}
                <Label htmlFor="social">SSN</Label>
                <TextInput type={showSocial ? 'text' : 'password'} id="social" name="social" value={formData.ssn} onChange={(e) => setFormData({...formData, ssn: e.target.value})} disabled={!editState}></TextInput>
                <Button title="Show SSN" type="button" className="usa-show-password" aria-controls="social" onClick={(): void => setShowSocial(showSocial => !showSocial)}>
                    {showSocial ? 'Hide SSN' : 'Show SSN'}<br />
                </Button>
                <Link variant="nav" href={'/changepassword'}>Change Password</Link>
                <Button type="button" onClick={() => { isEdit(editState => !editState); if(editState){setShowPassword(false); setShowSocial(false)} }} className="bg-accent-cool-dark">Edit</Button>
                <Button type="submit" disabled={!editState}>Submit</Button>
            </Fieldset>
        </Form>
    );
};

export default UpdateProfileForm;
