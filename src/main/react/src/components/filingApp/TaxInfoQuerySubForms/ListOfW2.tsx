import React, { useEffect, useState } from 'react';
import FormW2 from './FormW2';
import { useSubmit } from 'react-router-dom';
import { Card } from '@trussworks/react-uswds';

interface FormData {
  [key: string]: any;
}

const C: React.FC<{ index: number; getDataCallback: (id: number, formData: FormData) => void; onDelete: () => void }> = ({ index, getDataCallback, onDelete }) => {
  return (
    <Card>
      <FormW2 id={index} getDataCallback={getDataCallback} />
      <button onClick={onDelete}>Delete this form</button>
    </Card>
  );
};

const ListOfW2: React.FC = () => {
  const submit = useSubmit();

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
  }, [instances])

    const handleSpawn = () => {
        setInstances(prevInstances => ({
            ...prevInstances,
            [index]: <C key={index} index={index} getDataCallback={updateSubmission} onDelete={() => handleDelete(index)} />
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

    async function submitAllForms(){
        const listOfW2Formdata = [];
        for(let i in itemsMap){
            listOfW2Formdata.push(itemsMap[i]);
        }

        const headers = {
            'Content-Type': 'application/json',
        };    
        const response = await fetch('/submitW2', {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(listOfW2Formdata)
        });

        console.log(listOfW2Formdata);
    };

  return (
    <div>
        <button onClick={handleSpawn}>Spawn Component C</button>
            {Object.keys(instances).map(key => (
                <div key={key}>{instances[key]}</div>
            ))}
        <button onClick={submitAllForms}>Submit all forms</button>
    </div>
  );
};

export default ListOfW2;
