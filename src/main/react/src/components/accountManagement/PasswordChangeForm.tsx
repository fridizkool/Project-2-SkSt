import { Alert, Button, Fieldset, Grid, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Form, useLocation } from "react-router-dom";

const PasswordChangeForm = () => {
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
        <Alert type="error" heading="Error status" headingLevel="h4">
          {error}
        </Alert>
      )}
      <GridContainer className='usa-section'>
        <Grid className='flex-justify-center' row>
          <Grid col={12}>
            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
              <Grid col={6}>
                <Form method="put">
                  <Fieldset legend="">
                    <h1>{t("Change Password")}</h1>
                    <hr />
                    <p>
                      <abbr title="required" className="usa-hint usa-hint--required">
                        *
                      </abbr>{' '}
                      {t("indicates a required field")}.
                    </p>
                    <Label htmlFor="password-create-account">
                      {t("New password")}{' '}
                      <abbr title="required" className="usa-label--required">
                        *
                      </abbr>
                    </Label>
                    <TextInput id="password-create-account" name="password" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />

                    <button title="Show password" type="button" className="usa-show-password" aria-controls="password-create-account password-create-account-confirm" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                      {showPassword ? t('Hide password') : t('Show password')}
                    </button>

                    <Label htmlFor="password-create-account-confirm">
                      {t("Re-type password")}{' '}
                      <abbr title="required" className="usa-label--required">
                        *
                      </abbr>
                    </Label>
                    <TextInput id="password-create-account-confirm" name="password-confirm" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />
                    <div className='pt-3'>
                      <Button type='submit'>{t("Change Password")}</Button>
                    </div>
                  </Fieldset>
                </Form>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </GridContainer>
    </>
  );
};

export default PasswordChangeForm;
