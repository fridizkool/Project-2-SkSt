import { Accordion, Card, CardBody, CardHeader, Checkbox, Radio, Select, TextInput } from '@trussworks/react-uswds';
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
        takingStandardDeduction: true,
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
    }, []);

    const handleFormChange: React.ChangeEventHandler<HTMLFormElement> = (_) => {
        getDataCallback(id, formData);
    };

    const [radioSelectedValue, setSelectedValue] = useState<string>('single');
    const [isTakingStandardDeduction, setIsTakingStandardDeduction] = useState<boolean>(true);

    const handleChangeRadio = (value: string) => {
      setSelectedValue(value);
    };

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            ["filingStatus"]: radioSelectedValue
        }));
        getDataCallback(id, formData);
    }, [radioSelectedValue])

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            ["takingStandardDeduction"]: isTakingStandardDeduction,
            ["specialDeductions"]: "0"
        }));
        getDataCallback(id, formData);

    }, [isTakingStandardDeduction])


    return (
        <>
            <Form method="post" onBlur={handleFormChange}>  
            <Card>
                <CardHeader>
                    <h1>IRS Form W2</h1>
                </CardHeader>
                <CardBody>
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
                    <label htmlFor="additionalWitholdings">Additional Withholdings:</label>
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

                    <div>
                        <Radio 
                            checked={radioSelectedValue === 'single'}
                            id="single"
                            label="Single OR Married Filing Separately"
                            name="options"
                            onChange={() => handleChangeRadio('single')}
                        />
                        <Radio 
                            checked={radioSelectedValue === 'married'}
                            id="married"
                            label="Married Filing Jointly"
                            name="options"
                            onChange={() => handleChangeRadio('married')}
                        />
                    </div>

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
                    <label htmlFor="standardDeduction">Student Status:</label>
                    <Checkbox
                        id="standardDeduction"
                        name="standardDeduction"
                        checked={isTakingStandardDeduction}
                        onChange={() => {
                            setIsTakingStandardDeduction(prev => !prev)
                        }} 
                        label={"standardDeduction"}    />
                </div>

                <div>
                    <label htmlFor="specialDeductions">Additional Deductions:</label>
                    <TextInput 
                        disabled={isTakingStandardDeduction}
                        id="specialDeductions"
                        name="specialDeductions"
                        value={formData.specialDeductions}
                        type="number"
                        onChange={handleChangeText}
                    />
                </div>
                </CardBody>
            </Card>
            </Form>
        </>


    );
};

export default FormMisc;
