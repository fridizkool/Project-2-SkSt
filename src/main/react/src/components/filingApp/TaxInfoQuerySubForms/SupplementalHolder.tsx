import React, { useState } from 'react';
import FormMisc from './FormMisc';
import { CardGroup } from '@trussworks/react-uswds';


const SupplementalHolder: React.FC<{ existingForms: any }> = ({ existingForms }) => {
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
      <CardGroup>
        <FormMisc initInfo={existingForms} id={0} getDataCallback={updateSubmission} />
      </CardGroup>
      <button onClick={submitAllForms}>Save supplemental information</button>
    </>
  );
};

export default SupplementalHolder;
