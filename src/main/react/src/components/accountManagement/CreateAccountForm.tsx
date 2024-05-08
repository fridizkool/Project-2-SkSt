import { Alert, Button, Checkbox, Fieldset, Grid, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { Form, useLocation } from 'react-router-dom';

import { useEffect, useState } from "react";
import splash from "../../assets/tax-papers.jpeg";
import { useTranslation } from "react-i18next";

export default function CreateAccount() {
  const {t} = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);


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
      <GridContainer className=''>
        <Grid row className=''>
          <Grid col={12}>
            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
              <Grid row gap="md">
                <Grid col={6}>
                  <h1 className="margin-bottom-0">{t("Create account")}</h1>
                  <hr />
                  <Form method="post">
                    <Fieldset legend="">
                      <p>
                        <abbr title="required" className="usa-hint usa-hint--required">
                          *
                        </abbr>{' '}
                        {t("indicates a required field")}.
                      </p>
                      <Label htmlFor="email">
                        {t("profile.email")}
                        <abbr title="required" className="usa-label--required">
                          *
                        </abbr>
                      </Label>
                      <TextInput id="email" name="username" type="email" autoCapitalize="off" autoCorrect="off" required={true} />
                      <Label htmlFor="password-create-account">
                        {t("profile.password")}
                        <abbr title="required" className="usa-label--required">
                          *
                        </abbr>
                      </Label>
                      <TextInput id="password-create-account" name="password" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />
                      <Label htmlFor="password-create-account-confirm">
                        {t("Re-type password")}
                        <abbr title="required" className="usa-label--required">
                          *
                        </abbr>
                      </Label>
                      <TextInput id="password-create-account-confirm" name="password-confirm" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />
                      <button title="Show password" type="button" className="usa-show-password" aria-controls="password-create-account password-create-account-confirm" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                        {showPassword ? 'Hide password' : 'Show password'}
                      </button>

                      <Checkbox id="terms-and-conditions" name="terms-and-conditions" className="margin-y-3" required={true} label={t("TODO_TERMS&CONDITIONS")} />

                      <Button type="submit">{t("Create account")}</Button>
                    </Fieldset>
                  </Form>
                </Grid>
                <Grid col={6}>
                  <img src={splash} alt="splash" className="object-contain h-full w-full rounded shadow-lg" />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </GridContainer >
    </>
  )
}