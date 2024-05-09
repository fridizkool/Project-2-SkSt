import React, { useEffect, useState } from 'react';
import FormMisc from './FormMisc';
import { Button, CardGroup } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { returnFromSentForm } from '../../../util/redux/counterSlice';


const SupplementalHolder: React.FC<{ existingForms: any }> = ({ existingForms }) => {
  const { t } = useTranslation();
  const [subFormData, setSubFormdata] = useState<any>();


  async function submitAllForms() {

    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch('/submitMisc', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(subFormData["formData"])
    });

    dispatch(returnFromSentForm(response.status)); 

  };


    
  const formStatus = useSelector((state:any) => state.formStatus.sendStatus)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(formStatus == 1){
      submitAllForms();
    }
  }, [formStatus]); // Only run the effect if yourReduxState changes
  


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
