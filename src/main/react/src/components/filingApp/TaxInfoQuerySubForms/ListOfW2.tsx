import React, { useEffect, useState } from 'react';
import FormW2 from './FormW2';
import { Button, Card, CardGroup } from '@trussworks/react-uswds';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { returnFromSentForm } from '../../../util/redux/counterSlice';

interface FormData {
  [key: string]: any;
}

const C: React.FC<{ index: number; getDataCallback: (id: number, formData: FormData) => void, info: any; onDelete: () => void }> = ({ index, getDataCallback, info, onDelete }) => {
  const { t } = useTranslation();
  return (
    <Card gridLayout={{ col: 12 }}>
      <FormW2 id={index} getDataCallback={getDataCallback} initInfo={info} />
      <Button onClick={onDelete} type={'button'} className='bg-error'>{t("Delete this form")}</Button>
    </Card>
  );
};

const ListOfW2: React.FC<{ existingForms: any }> = ({ existingForms }) => {
  const { t } = useTranslation();
  const [itemsMap, setItemsMap] = useState<{ [id: number]: FormData }>({});
  const [instances, setInstances] = useState<{ [key: string]: JSX.Element }>({});
  const [index, setIndex] = useState<number>(0);

  const updateSubmission = (index: number, formData: FormData) => {
    setItemsMap(prevState => ({
      ...prevState,
      [index]: formData
    }));
  };

  useEffect(() => {
    const listOfForms = existingForms.map((existingForm: any, i: number) => (
      <C
        key={i}
        index={i}
        getDataCallback={updateSubmission}
        info={existingForm}
        onDelete={() => handleDelete(i)}
      />
    ));
    setIndex(existingForms.length);
    setInstances(listOfForms);
  }, []);

  const handleSpawn = () => {
    setInstances(prevInstances => ({
      ...prevInstances,
      [index]: <C key={index} index={index} getDataCallback={updateSubmission} info={{}} onDelete={() => handleDelete(index)} />
    }));
    setIndex(prevIndex => prevIndex + 1);
  };

  const handleDelete = (deletedIndex: number) => {
    setInstances(prevInstances => {
      const newState = { ...prevInstances };
      delete newState[deletedIndex];
      return newState;
    });

    setItemsMap(prevState => {
      const newState = { ...prevState };
      delete newState[deletedIndex];
      return newState;
    });
  };


  const formStatus = useSelector((state:any) => state.formStatus.sendStatus)
  const dispatch = useDispatch()

  async function submitAllForms() {
    const listOfW2Formdata = [];
    for (let i in itemsMap) {
      listOfW2Formdata.push(itemsMap[i]);
    }

    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch('/submitW2List', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(listOfW2Formdata)
    });

    dispatch(returnFromSentForm(response.status)); 
    
  };


  
  useEffect(() => {
    if(formStatus == 1){
      submitAllForms();
    }
  }, [formStatus]); // Only run the effect if yourReduxState changes
  

  return (
    <div>
      <Button onClick={submitAllForms} type={'button'}>{t("Save all W2 forms")}</Button>
      <CardGroup>
        {Object.keys(instances).map(key => (
          <React.Fragment key={key}>{instances[key]}</React.Fragment>
        ))}
      </CardGroup>
      <Button onClick={handleSpawn} type='button'>{t("Add new W2")}</Button>
    </div>
  );
};

export default ListOfW2;
