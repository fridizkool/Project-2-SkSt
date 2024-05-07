import { Accordion, Card, CardBody, CardHeader, Checkbox, TextInput } from '@trussworks/react-uswds';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
const FormMisc: React.FC<FormW2Props> = ({ id, getDataCallback, initInfo }) => {
    // Define the default initial state
    const defaultFormData = {
        supplementalIncome: '',
        additionalWitholdings: '',
        filingStatus: '',
        dependents: '',
        studentStatus: false,
        specialDeductions: ''
    };
    
    const sanitizedInitInfo = Object.fromEntries(
        Object.entries(initInfo).map(([key, value]) => [key, value === null ? '' : value])
      );

    // Merge initInfo with the default initial state
    const mergedFormData = { ...defaultFormData, ...sanitizedInitInfo };

    // Define state variable to store form data with the merged initial state
    const [formData, setFormData] = React.useState(mergedFormData);


    const [isChecked, setIsChecked] = useState(false);
    console.log(isChecked);

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };


    // Handle form input change
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        getDataCallback(id, formData);
    });

    const handleFormChange: React.ChangeEventHandler<HTMLFormElement> = (_) => {
        getDataCallback(id, formData);
    };

    const formItems: any = [{
        title: "Misc Information",
        content:
            <Card>
                <div>
                    <label htmlFor="supplementalIncome">Supplemental Income:</label>
                    <TextInput
                        id="supplementalIncome"
                        name="supplementalIncome"
                        value={formData.supplementalIncome}
                        type="number"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="additionalWitholdings">Supplemental Income:</label>
                    <TextInput
                        id="additionalWitholdings"
                        name="additionalWitholdings"
                        value={formData.additionalWitholdings}
                        type="number"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="filingStatus">Filing Status:</label>
                    <select
                        id="filingStatus"
                        name="filingStatus"
                        value={formData.filingStatus}
                        onChange={()=>{}}
                    >
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="headOfHousehold">Head of Household</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="dependents">Dependents:</label>
                    <TextInput
                        id="dependents"
                        name="dependents"
                        value={formData.dependents}
                        type="number"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="studentStatus">Student Status:</label>
                    <Checkbox
                        id="studentStatus"
                        name="studentStatus"
                        checked={formData.studentStatus}
                        onChange={handleChangeCheckbox} 
                        label={"studentStatus"}    />
                </div>

                <div>
                    <label htmlFor="specialDeductions">Special Deductions:</label>
                    <TextInput
                        id="specialDeductions"
                        name="specialDeductions"
                        value={formData.specialDeductions}
                        type="number"
                        onChange={handleChangeText}
                    />
                </div>
            </Card>,
        expanded: false,
        id: "general-info",
        headingLevel: "h3",
    }
                
    ]

    return (
        <>
            <Form method="post" onBlur={handleFormChange}>  
                <CardHeader>
                    <h1>IRS Form W2</h1>
                </CardHeader>
                <CardBody>

                    <Accordion items={formItems}/>
                    
                </CardBody>
            </Form>
        </>


    );
};

export default FormMisc;
