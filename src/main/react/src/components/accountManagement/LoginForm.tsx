import { Fieldset, Label, TextInput, Button, Alert } from '@trussworks/react-uswds';
import { Form, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get('error');

    useEffect(() => {
        setError(errorMessage);
    })
    return (
        <>
            {error && (
                <Alert type="error" heading="" headingLevel="h4">
                    {t("incorrect")}
                </Alert>
            )}
            <Form method="post">
                <Fieldset legend="">
                    <Label htmlFor="username-in">{t("profile.email")}</Label>
                    <TextInput id="username-in" type="email" name='username' required />
                    <Label htmlFor="password-in">{t("profile.password")}</Label>
                    <TextInput id="password-in" type={showPassword ? 'text' : 'password'} name='password' required />
                    <Button title="Show password" type="button" className="usa-show-password justify-self-end" aria-controls="password-in" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                        {showPassword ? t('Hide password') : t('Show password')}
                    </Button>
                    <Button type='submit' className="pt-3">{t("Sign in")}</Button>
                </Fieldset>
            </Form>
        </>
    );
};

export default LoginForm;
