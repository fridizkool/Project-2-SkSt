import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Grid, GridContainer, Link } from '@trussworks/react-uswds';
import LoginForm from '../components/accountManagement/LoginForm';
import splash from '../assets/taxes-splash.jpg';
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

export default function Login() {
    const { t } = useTranslation();
    return (
        <>
            <GridContainer className='usa-section'>
                <Grid row className='flex-justify-center'>
                    <Grid col={12}>
                        <div className="bg-gradient-to-r from-slate-400 to-slate-200 padding-y-3 padding-x-5 border border-base-lighter">
                            <Grid row gap="md">
                                <Grid col={6}>
                                    <h1>{i18n.t("login")}</h1>
                                    <hr></hr>
                                    <LoginForm />
                                </Grid>
                                <Grid col={6}>
                                    <img alt="taxes" src={splash} className='rounded shadow-lg' />
                                </Grid>
                            </Grid>
                        </div>
                        <p className="text-center">
                            {t("needAccount") + " "}
                            <Link href="/create">{t("create")}</Link>.
                        </p>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    );
}