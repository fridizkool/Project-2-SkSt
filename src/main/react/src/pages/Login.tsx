import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Grid, GridContainer, Link } from '@trussworks/react-uswds';
import LoginForm from '../components/accountManagement/LoginForm';
import splash from '../assets/taxes-splash.jpg';

export default function Login() {
    return (
        <>
            <GridContainer className='usa-section'>
                <Grid row className='flex-justify-center'>
                    <Grid col={12}>
                        <div className="bg-gradient-to-r from-slate-400 to-slate-200 padding-y-3 padding-x-5 border border-base-lighter">
                            <Grid row gap="md">
                                <Grid col={6}>
                                    <h1>Sign in</h1>
                                    <hr></hr>
                                    <LoginForm />
                                </Grid>
                                <Grid col={6}>
                                    <img alt="taxes" src={splash} className='rounded shadow-lg'/>
                                </Grid>
                            </Grid>
                        </div>
                        <p className="text-center">
                            {"Don't have an account? "}
                            <Link href="/create">Create your account now</Link>.
                        </p>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    );
}