import { Fieldset, Label, TextInput, Button, Link, Alert } from '@trussworks/react-uswds';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useLocation } from 'react-router-dom';


const UpdateProfileForm: React.FC<UserProfileFormProps> = ({ userProfile }: any) => {
    const {t} = useTranslation();
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
            <h1>{formData.username}</h1>
            <hr />
            <Form method="put">
                <Fieldset>
                    <Label htmlFor="username">{t("profile.email")}</Label>
                    <TextInput type="email" id="username" name="username" value={formData.username} disabled />
                    <Label htmlFor="firstName">{t("profile.name.first")}</Label>
                    <TextInput type="text" id="firstName" name="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} disabled={!editState} />
                    <Label htmlFor="lastName">{t("profile.name.last")}</Label>
                    <TextInput type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} disabled={!editState} />
                    <Label htmlFor="initial">{t("profile.name.middle")}</Label>
                    {/* TODO Just do middle name? */}
                    <TextInput type="text" id="initial" name="initial" value={formData.initial} onChange={(e) => setFormData({ ...formData, initial: e.target.value })} disabled={!editState} />
                    <Label htmlFor="suffix">{t("profile.name.suffix")}</Label>
                    <TextInput type="text" id="suffix" name="suffix" value={formData.suffix} onChange={(e) => setFormData({ ...formData, suffix: e.target.value })} disabled={!editState} />
                    <Label htmlFor="address">{t("profile.address")}</Label>
                    <TextInput type="text" id="address" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} disabled={!editState} />
                    <Label htmlFor="telephoneNumber">{t("profile.telephone")}</Label>
                    <TextInput type="text" id="telephoneNumber" name="telephoneNumber" value={formData.telephoneNumber} onChange={(e) => setFormData({ ...formData, address: e.target.value })} disabled={!editState} />
                    <Label htmlFor="social">{t("profile.ssn")}</Label>
                    <TextInput type={showSocial ? 'text' : 'password'} id="ssn" name="ssn" value={formData.ssn} onChange={(e) => setFormData({ ...formData, ssn: e.target.value })} disabled={!editState}></TextInput>
                    <Button title="Show SSN" type="button" className="usa-show-password justify-self-end" aria-controls="ssn" onClick={(): void => setShowSocial(showSocial => !showSocial)}>
                        {showSocial ? t("Hide SSN") : t("Show SSN")}<br />
                    </Button>
                    <Button type="button" onClick={() => { isEdit(editState => !editState); if (editState) { setShowSocial(false) } }}>{t("Edit")}</Button>
                    <Button type="submit" disabled={!editState}>{t("Submit")}</Button><br />
                    <Link variant="nav" href={'/changepassword'}>{t("Change Password")}</Link>
                </Fieldset>
            </Form>
        </>

    );
};

export default UpdateProfileForm;
