import { Grid, GridContainer } from "@trussworks/react-uswds";
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