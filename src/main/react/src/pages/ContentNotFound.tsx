import { Grid, GridContainer } from "@trussworks/react-uswds";

export default function ContentNotFound() {
    return (
        <>
            <GridContainer>
                <Grid row className="text-center">
                    <Grid col={12}>
                        <p><h1>404</h1></p>
                        <p><strong>NOTHING WAS FOUND</strong></p>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    )
}