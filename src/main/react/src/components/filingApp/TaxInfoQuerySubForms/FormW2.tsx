import { Accordion, Card, CardBody, CardHeader, Checkbox, InputGroup, InputPrefix, TextInput } from '@trussworks/react-uswds';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-router-dom';
const FormW2: React.FC<FormW2Props> = ({ id, getDataCallback, initInfo }) => {
    const { t } = useTranslation();
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

    // Handle form input change
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    useEffect(() => {
        getDataCallback(id, formData);
    });

    const handleFormChange: React.ChangeEventHandler<HTMLFormElement> = (_) => {
        getDataCallback(id, formData);
    };

 
    const formItems: any = [{
        title: t("Employer information"),
        content:
            <Card>
                <div>
                    <label htmlFor="employerId">{t("W2.Employer ID")}:</label>
                    <TextInput
                        id="employerId"
                        name="employerId"
                        value={formData.employerId}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="employerInformation">{t("W2.Employer information")}</label>
                    <TextInput
                        id="employerInformation"
                        name="employerInformation"
                        value={formData.employerInformation}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="controlNumber">{t("W2.Control number")}:</label>
                    <TextInput
                        id="controlNumber"
                        name="controlNumber"
                        value={formData.controlNumber}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="allocatedTips">{t("W2.Allocated tips")}:</label>
                    <InputGroup>
                        <InputPrefix>$</InputPrefix>
                        <TextInput
                            id="allocatedTips"
                            name="allocatedTips"
                            value={formData.allocatedTips}
                            type="number"
                            onChange={handleChangeText}
                        />
                    </InputGroup>
                </div>
                <div>
                    <label htmlFor="nonqualifiedPlan">{t("W2.Nonqualified plans")}:</label>
                    <TextInput
                        id="nonqualifiedPlan"
                        name="nonqualifiedPlan"
                        value={formData.nonqualifiedPlan}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <label htmlFor="deferrals">{t("W2.Deferrals")}:</label>
                    <TextInput
                        id="deferrals"
                        name="deferrals"
                        value={formData.deferrals}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>
                <div>
                    <Checkbox
                        id={"statutory" + id}
                        name="statutory"
                        checked={formData.statutory}
                        label={t("W2.Statutory employment")}
                        onChange={handleCheck}

                    />
                </div>
                <div>
                    <Checkbox
                        id={"retirement" + id}
                        name="retirement"
                        checked={formData.retirement}
                        label={t("W2.Retirement plan")}
                        onChange={handleCheck}

                    />
                </div>
                <div>
                    <Checkbox
                        id={"sickPay" + id}
                        name="sickPay"
                        checked={formData.sickPay}
                        label={t("W2.Third-party sick pay")}
                        onChange={handleCheck}

                    />
                </div>
                <div>
                    <label htmlFor="other">{t("W2.Other")}:</label>
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
                    <h1>{t("W2.form")}</h1>
                </CardHeader>
                <CardBody>

                    <div>
                        <label htmlFor="income">{t("W2.Income")}:</label>
                        <InputGroup>
                            <InputPrefix>$</InputPrefix>
                            <TextInput
                                id="income"
                                name="income"
                                value={formData.income}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <label htmlFor="withheldFederal">{t("W2.Federal taxes withheld")}:</label>
                        <InputGroup>
                            <InputPrefix>$</InputPrefix>
                            <TextInput
                                id="withheldFederal"
                                name="withheldFederal"
                                value={formData.withheldFederal}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <label htmlFor="socialSecurity">{t("W2.Social Security wages")}:</label>
                        <InputGroup>
                            <InputPrefix>$</InputPrefix>
                            <TextInput
                                id="socialSecurity"
                                name="socialSecurity"
                                value={formData.socialSecurity}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <label htmlFor="withheldSS">{t("W2.Social Security taxes withheld")}:</label>
                        <InputGroup>
                            <InputPrefix>$</InputPrefix>
                            <TextInput
                                id="withheldSS"
                                name="withheldSS"
                                value={formData.withheldSS}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <label htmlFor="medicare">{t("W2.Medicare Wages")}:</label>
                        <InputGroup>
                            <InputPrefix>$</InputPrefix>
                            <TextInput
                                id="medicare"
                                name="medicare"
                                value={formData.medicare}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <label htmlFor="withheldMedicare">{t("W2.Medicare taxes withheld")}:</label>
                        <InputGroup>
                            <InputPrefix>$</InputPrefix>
                            <TextInput
                                id="withheldMedicare"
                                name="withheldMedicare"
                                value={formData.withheldMedicare}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <label htmlFor="socialSecurityTips">{t("W2.Social Security tips")}:</label>
                        <InputGroup>
                            <InputPrefix>$</InputPrefix>
                            <TextInput
                                id="socialSecurityTips"
                                name="socialSecurityTips"
                                value={formData.socialSecurityTips}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </InputGroup>
                    </div>

                    <div>
                        <label htmlFor="dependentCare">{t("W2.Dependent care")}:</label>
                        <InputGroup>
                            <InputPrefix>$</InputPrefix>
                            <TextInput
                                id="dependentCare"
                                name="dependentCare"
                                value={formData.dependentCare}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </InputGroup>
                    </div>
                    <Accordion items={formItems} />

                </CardBody>
            </Form>
        </>


    );
};

export default FormW2;
