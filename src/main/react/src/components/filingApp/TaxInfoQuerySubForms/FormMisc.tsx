import { Card, CardBody, CardHeader, Checkbox, Radio, TextInput } from '@trussworks/react-uswds';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
const FormMisc: React.FC<FormMiscProps> = ({getDataCallback, initInfo }) => {
    // Define the default initial state
    const defaultFormData = {
        supplementalIncome: '',
        additionalWithholdings: '',
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


    // Handle form input change
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        getDataCallback(formData);
    }, []);

    const handleFormChange: React.ChangeEventHandler<HTMLFormElement> = (_) => {
        getDataCallback(formData);
    };

    const [radioSelectedValue, setSelectedValue] = useState<string>('single');
    const [isTakingStandardDeduction, setIsTakingStandardDeduction] = useState<boolean>(formData.takingStandardDeduction);

    const handleChangeRadio = (value: string) => {
      setSelectedValue(value);
    };

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            ["filingStatus"]: radioSelectedValue
        }));
        getDataCallback(formData);
    }, [radioSelectedValue])

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            ["takingStandardDeduction"]: isTakingStandardDeduction,
            ["specialDeductions"]: "0"
        }));
        getDataCallback(formData);

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
                    <label htmlFor="additionalWithholdings">Additional Withholdings:</label>
                    <TextInput
                        id="additionalWithholdings"
                        name="additionalWithholdings"
                        value={formData.additionalWithholdings}
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
                            label="Single"
                            name="options"
                            onChange={() => handleChangeRadio('single')}
                        />
                        <Radio 
                            checked={radioSelectedValue === 'marriedJoint'}
                            id="marriedJoint"
                            label="Married Filing Jointly"
                            name="options"
                            onChange={() => handleChangeRadio('marriedJoint')}
                        />
                                                <Radio 
                            checked={radioSelectedValue === 'marriedSeparate'}
                            id="marriedSeparate"
                            label="Married Filing Separately"
                            name="options"
                            onChange={() => handleChangeRadio('marriedSeparate')}
                        />
                                                <Radio 
                            checked={radioSelectedValue === 'headOfHousehold'}
                            id="headOfHousehold"
                            label="Head of Household"
                            name="options"
                            onChange={() => handleChangeRadio('headOfHousehold')}
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
