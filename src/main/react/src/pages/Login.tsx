import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Grid, GridContainer, Link } from '@trussworks/react-uswds';
import LoginForm from '../components/LoginForm';
import LoginStatus from '../components/LoginStatus';

export default function Login() {
    return (
        <>
            <GridContainer className='usa-section'>
                <Grid row className='flex-justify-center'>
                    <Grid col={12}>
                        <div className="bg-base-lightest padding-y-3 padding-x-5 border border-base-lighter">
                            <h1>Sign in</h1>
                            <LoginForm/>
                        </div>
                        <p className="text-center">
                            {"Don't have an account? "}
                            <Link href="/create">Create your account now</Link>.
                        </p>
                    </Grid>
                </Grid>
            </GridContainer>
            <LoginStatus/>
        </>
    );
}