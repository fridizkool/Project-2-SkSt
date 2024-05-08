import React, { useState } from "react";
import { Button, Grid, GridContainer, Table } from "@trussworks/react-uswds";
import { useLoaderData, useSubmit } from "react-router-dom";

export default function Users() {
    const totalReturns: any = useLoaderData() as any;
    const submit = useSubmit();
    const [disabledButtons, setDisabledButtons] = useState<string[]>([]); // State to manage disabled buttons

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
            setDisabledButtons(disabledButtons.filter(name => name !== username));
        })
    };

    return (
        <>
            <GridContainer className='usa-section'>
                <Grid className='flex-justify-center' row>
                    <Grid col={12}>
                        <div className="bg-gradient-to-r from-slate-400 to-slate-200 padding-y-3 padding-x-5 border border-base-lighter shadow-md">
                            <Table striped fullWidth className="bg-primary-lighter">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
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
                                                    {disabledButtons.includes(user.username) ? 'Deleting...' : 'Delete'}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Button type="button">Create user</Button>
                        </div>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    );
}
