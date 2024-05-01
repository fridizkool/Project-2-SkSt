import { Button, DatePicker, Fieldset, Form, Grid, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";
import CreateAccountForm from "../components/accountManagement/CreateAccountForm";

export default function CreateAccount() {


    return (
        <>
            <GridContainer className='usa-section'>
                <Grid row className='flex-justify-center'>
                    <Grid col={12}>
                        <CreateAccountForm/>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    )
}