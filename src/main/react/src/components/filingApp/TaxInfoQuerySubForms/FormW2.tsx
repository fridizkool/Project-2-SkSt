import { Accordion, Card, CardBody, CardHeader, Checkbox, TextInput } from '@trussworks/react-uswds';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
const FormW2: React.FC<FormW2Props> = ({ id, getDataCallback, initInfo }) => {
    // Define the default initial state
    const defaultFormData = {
        employerId: '',
        employerInformation: '',
        controlNumber: '',
        income: '',
        withheldFederal: '',
        socialSecurity: '',
        withheldSS: '',
        medicare: '',
        withheldMedicare: '',
        socialSecurityTips: '',
        allocatedTips: '',
        dependentCare: '',
        nonqualifiedPlan: '',
        deferrals: '',
        statutory: false,
        retirement: false,
        sickPay: false,
        other: ''
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    <label htmlFor="employerId">Employer ID:</label>
                    <TextInput
                        id="employerId"
                        name="employerId"
                        value={formData.employerId}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="employerInformation">Employer Information:</label>
                    <TextInput
                        id="employerInformation"
                        name="employerInformation"
                        value={formData.employerInformation}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="controlNumber">Control Number:</label>
                    <TextInput
                        id="controlNumber"
                        name="controlNumber"
                        value={formData.controlNumber}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="allocatedTips">Allocated Tips:</label>
                    <TextInput
                        id="allocatedTips"
                        name="allocatedTips"
                        value={formData.allocatedTips}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="nonqualifiedPlan">Nonqualified Plan:</label>
                    <TextInput
                        id="nonqualifiedPlan"
                        name="nonqualifiedPlan"
                        value={formData.nonqualifiedPlan}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="deferrals">Deferrals:</label>
                    <TextInput
                        id="deferrals"
                        name="deferrals"
                        value={formData.deferrals}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="statutory">Statutory:</label>
                    <Checkbox
                        id="statutory"
                        name="statutory"
                        checked={formData.statutory}
                        label={"Statutory"} 
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label htmlFor="retirement">Retirement:</label>
                    <Checkbox
                        id="retirement"
                        name="retirement"
                        checked={formData.retirement}
                        label={"Retirement"}    
                        onChange={handleChange}
            
                    />
                </div>
                <div>
                    <label htmlFor="sickPay">Sick Pay:</label>
                    <Checkbox
                        id="sickPay"
                        name="sickPay"
                        checked={formData.sickPay}
                        label={"Sick Pay"} 
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label htmlFor="other">Other:</label>
                    <TextInput
                        id="other"
                        name="other"
                        value={formData.other}
                        type="text"
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
                
                    <div>
                        <label htmlFor="income">Income:</label>
                        <TextInput
                            id="income"
                            name="income"
                            value={formData.income}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>
                    <div>
                        <label htmlFor="withheldFederal">Withheld Federal:</label>
                        <TextInput
                            id="withheldFederal"
                            name="withheldFederal"
                            value={formData.withheldFederal}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>
                    <div>
                        <label htmlFor="socialSecurity">Social Security wages:</label>
                        <TextInput
                            id="socialSecurity"
                            name="socialSecurity"
                            value={formData.socialSecurity}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>
                    <div>
                        <label htmlFor="withheldSS">Withheld Social Security:</label>
                        <TextInput
                            id="withheldSS"
                            name="withheldSS"
                            value={formData.withheldSS}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>
                    <div>
                        <label htmlFor="medicare">Medicare wages:</label>
                        <TextInput
                            id="medicare"
                            name="medicare"
                            value={formData.medicare}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>
                    <div>
                        <label htmlFor="withheldMedicare">Withheld Medicare:</label>
                        <TextInput
                            id="withheldMedicare"
                            name="withheldMedicare"
                            value={formData.withheldMedicare}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>
                    <div>
                        <label htmlFor="socialSecurityTips">Social Security Tips:</label>
                        <TextInput
                            id="socialSecurityTips"
                            name="socialSecurityTips"
                            value={formData.socialSecurityTips}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="dependentCare">Dependent Care:</label>
                        <TextInput
                            id="dependentCare"
                            name="dependentCare"
                            value={formData.dependentCare}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>
                    <Accordion items={formItems}/>
                    
                </CardBody>
            </Form>
        </>


    );
};

export default FormW2;
