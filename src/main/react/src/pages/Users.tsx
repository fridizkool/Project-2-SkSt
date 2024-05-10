import { useEffect, useState } from "react";
import { Alert, Button, Grid, GridContainer, Table } from "@trussworks/react-uswds";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Users() {
    const totalReturns: any = useLoaderData() as any;
    const [disabledButtons, setDisabledButtons] = useState<string[]>([]); // State to manage disabled buttons
    const nav = useNavigate();
    const { t } = useTranslation();

    const deleteCallback = (username: string) => {
        // Disable the button while processing the delete request
        setDisabledButtons([...disabledButtons, username]);
        console.log("Deleting user:", username);
        // Perform delete operation, here you can call your delete API
        fetch(`deleteUser/${username}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(() => {
            nav("/users?msg=done");
        })
    };

    const [msg, setMsg] = useState<string | null>(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get('msg');

    useEffect(() => {
        setMsg(errorMessage);
    })

    return (
        <>
            {msg && (
                <Alert type="info" headingLevel="h4" slim>
                    {t(`${msg}`)}
                </Alert>
            )}
            <GridContainer className='usa-section'>
                <Grid className='flex-justify-center' row>
                    <Grid col={12}>
                        <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter shadow-md">
                            <h1>{t("user_other")}</h1>
                            <hr/>
                            <Table striped fullWidth className="bg-primary-lighter">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>{t("profile.email")}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {totalReturns.map((user: any) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>
                                                <Button 
                                                    type="submit" 
                                                    disabled={disabledButtons.includes(user.username)} // Disable the button if username is in the disabledButtons array
                                                    onClick={() => deleteCallback(user.username)} // Call deleteCallback function onClick
                                                >
                                                    {disabledButtons.includes(user.username) ? t('Deleting...') : t('Delete')}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    );
}
