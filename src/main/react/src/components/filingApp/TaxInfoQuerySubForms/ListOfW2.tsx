import React, { useEffect, useState } from 'react';
import FormW2 from './FormW2';
import { Card } from '@trussworks/react-uswds';

interface FormData {
  [key: string]: any;
}

const C: React.FC<{ index: number; getDataCallback: (id: number, formData: FormData) => void, info: any; onDelete: () => void }> = ({ index, getDataCallback, info, onDelete }) => {
  return (
    <Card>
      <FormW2 id={index} getDataCallback={getDataCallback} initInfo={info} />
      <button onClick={onDelete}>Delete this form</button>
    </Card>
  );
};

const ListOfW2: React.FC<{existingForms: any }> = ({existingForms }) => {
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

    async function submitAllForms(){
        const listOfW2Formdata = [];
        for(let i in itemsMap){
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

        console.log(response);
    };

  return (
    <div>
        <button onClick={handleSpawn}>Add new W2</button>
            {Object.keys(instances).map(key => (
                <div key={key}>{instances[key]}</div>
            ))}
        <button onClick={submitAllForms}>Submit W2</button>
    </div>
  );
};

export default ListOfW2;
