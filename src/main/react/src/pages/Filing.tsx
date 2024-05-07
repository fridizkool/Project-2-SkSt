import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Grid, GridContainer } from '@trussworks/react-uswds';
import { Outlet, useLoaderData } from 'react-router-dom';


export default function Filing() {
    const existingForms: any = useLoaderData() as any;

    console.log(existingForms)
    return (
        <>
            <GridContainer>
                <Grid row className='padding-1'>
                    {/* <Grid col={6}> */}
                        <Outlet/>
                        {/* <TaxFilingForm/> */}
                    {/* </Grid>
                    <Grid col={5} offset={1}>
                        <TaxReturnStatus/>
                    </Grid> */}
                </Grid>
            </GridContainer>
        </>
    );
}