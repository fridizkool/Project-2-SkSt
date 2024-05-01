import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Grid, GridContainer } from '@trussworks/react-uswds';
import LogoutButton from '../components/accountManagement/LogoutButton';
import LoginStatus from '../components/accountManagement/LoginStatus';
import TaxReturnStatus from '../components/filingApp/TaxReturnStatus';
import TaxInfoQueryForm from '../components/filingApp/TaxInfoQueryForm';


export default function Filing() {
    return (
        <>
            <GridContainer>
                <Grid row className='padding-1'>
                    <Grid col={6}>
                        <TaxInfoQueryForm/>
                    </Grid>
                    <Grid col={5} offset={1}>
                        <TaxReturnStatus/>
                    </Grid>
                </Grid>
            </GridContainer>
            <LogoutButton />
            <LoginStatus />
        </>
    );
}