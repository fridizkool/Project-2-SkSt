import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from '@trussworks/react-uswds';
import Form1099 from './Form1099';
import { useTranslation } from 'react-i18next';

interface FormData {
  [key: string]: any;
}

const C: React.FC<{ index: number; getDataCallback: (id: number, formData: FormData) => void, info: any; onDelete: () => void }> = ({ index, getDataCallback, info, onDelete }) => {
  const { t } = useTranslation();
  return (
    <Card gridLayout={{ col: 12 }}>
      <Form1099 id={index} getDataCallback={getDataCallback} initInfo={info} />
      <Button onClick={onDelete} type={'button'} className='bg-error object-cover w-full'>{t("Delete this form")}</Button>
    </Card>
  );
};

const ListOf1099: React.FC<{ existingForms: any }> = ({ existingForms }) => {
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

  // Populate with existing data using passed forms
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
    console.log(instances)
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

  async function submitAllForms() {
    const listOfW2Formdata = [];
    for (let i in itemsMap) {
      listOfW2Formdata.push(itemsMap[i]);
    }

    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch('/submit1099List', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(listOfW2Formdata)
    });

    console.log(response);
  };

  return (
    <div>
      <Button onClick={submitAllForms} type={'button'}>{t("Save all 1099 forms")}</Button>
      <CardGroup>
        {Object.keys(instances).map(key => (
          <React.Fragment key={key}>{instances[key]}</React.Fragment>
        ))}
      </CardGroup>
      <Button onClick={handleSpawn} type={'button'}>{t("Add new 1099")}</Button>
    </div>
  );
};

export default ListOf1099;
