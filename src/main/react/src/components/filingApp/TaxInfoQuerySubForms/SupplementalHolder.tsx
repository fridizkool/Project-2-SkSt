import React, {  } from 'react';
import FormMisc from './FormMisc';


const SupplementalHolder: React.FC<{existingForms: any }> = ({existingForms }) => {
  
  async function submitAllForms(){
    
    console.log("submit");
};

function handleCallback(){

}

  return (
    <div>
      <FormMisc initInfo={existingForms} id={0} getDataCallback={handleCallback} />
      <button onClick={submitAllForms}>Submit W2</button>
    </div>
  );
};

export default SupplementalHolder;
