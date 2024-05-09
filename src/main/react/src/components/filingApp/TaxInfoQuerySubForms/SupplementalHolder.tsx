import React, { useState } from 'react';
import FormMisc from './FormMisc';
import { Button, CardGroup } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';


const SupplementalHolder: React.FC<{ existingForms: any }> = ({ existingForms }) => {
  const { t } = useTranslation();
  const [subFormData, setSubFormdata] = useState<any>();


  async function submitAllForms() {

    const headers = {
      'Content-Type': 'application/json',
    };
    await fetch('/submitMisc', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(subFormData["formData"])
    });
  };


  const updateSubmission = (formData: FormData) => {
    setSubFormdata((prevState: any) => ({
      ...prevState,
      formData
    }));
  };
  return (
    <>
      <Button onClick={submitAllForms} type={'button'}>{t("Save supplemental information")}</Button>
      <CardGroup>
        <FormMisc initInfo={existingForms} id={0} getDataCallback={updateSubmission} />
      </CardGroup>
    </>
  );
};

export default SupplementalHolder;
