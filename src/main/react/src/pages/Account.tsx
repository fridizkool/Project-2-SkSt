import { Grid, GridContainer } from "@trussworks/react-uswds";
import { useLoaderData } from "react-router-dom";
import UpdateProfileForm from "../components/accountManagement/UpdateProfileForm";

export default function Account() {
    const userProfile: UserProfile = useLoaderData() as UserProfile;

    //TODO Show error message with valid query string

    return (
        <>
            <GridContainer className='usa-section'>
                <Grid className='flex-justify-center' row>
                    <Grid col={12}>
                        <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                            <Grid col={6}>
                                <UpdateProfileForm userProfile={userProfile} />
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </GridContainer>


        </>
    )
}