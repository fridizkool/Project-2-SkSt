import { Button, DatePicker, Fieldset, Form, Grid, GridContainer, Label, Link, TextInput } from "@trussworks/react-uswds";
import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UpdateProfileForm from "../components/accountManagement/UpdateProfileForm";

export default function Account() {      
    const userProfile: UserProfile = useLoaderData() as UserProfile;
    
    return (
        <>
            <GridContainer className='usa-section'>
                <Grid className='flex-justify-center' row>
                    <Grid col={12}>
                        <div className="bg-base-lightest padding-y-3 padding-x-5 border border-base-lighter">
                            <UpdateProfileForm userProfile={userProfile}/>
                        </div>
                    </Grid>
                </Grid>
            </GridContainer>


        </>
    )
}