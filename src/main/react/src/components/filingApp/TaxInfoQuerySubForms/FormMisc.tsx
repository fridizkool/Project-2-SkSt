import { Card, CardBody, CardHeader, Checkbox, InputGroup, InputPrefix, Radio, TextInput } from '@trussworks/react-uswds';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-router-dom';
const FormMisc: React.FC<FormMiscProps> = ({ getDataCallback, initInfo }) => {
    const { t } = useTranslation();
    // Define the default initial state
    const defaultFormData = {
        supplementalIncome: '',
        additionalWithholdings: '',
        filingStatus: '',
        dependents: '',
        studentStatus: false,
        isTakingStandardDeduction: true,
        specialDeductions: '',
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

    const [radioSelectedValue, setSelectedValue] = useState<string>(formData.filingStatus);
    const [isTakingStandardDeduction, setIsTakingStandardDeduction] = useState<boolean>(formData.isTakingStandardDeduction);
    const [studentStatus, setStudentStatus] = useState<boolean>(formData.studentStatus);

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
            ["isTakingStandardDeduction"]: isTakingStandardDeduction
        }));
        if (isTakingStandardDeduction) {
            setFormData(prevState => ({
                ...prevState,
                ["specialDeductions"]: "0"
            }));
        }
        getDataCallback(formData);

    }, [isTakingStandardDeduction])

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            ["studentStatus"]: studentStatus,
        }));
        getDataCallback(formData);

    }, [studentStatus])


    return (
        <>
            <Card gridLayout={{ col: 12 }}>
                <CardHeader>
                    <h1 className="usa-card__heading">{t("Additional information")}</h1>
                    <hr />
                </CardHeader>
                <CardBody>
                    <Form method="post" onBlur={handleFormChange}>
                        <div>
                            <label htmlFor="supplementalIncome">{t("TaxInfo.Supplemental income")}:</label>
                            <InputGroup>
                                <InputPrefix>$</InputPrefix>
                                <TextInput
                                    id="supplementalIncome"
                                    name="supplementalIncome"
                                    value={formData.supplementalIncome}
                                    type="number"
                                    onChange={handleChangeText}
                                />
                            </InputGroup>
                        </div>
                        <div>
                            <label htmlFor="additionalWithholdings">{t("TaxInfo.Additional withholdings")}:</label>
                            <InputGroup>
                                <InputPrefix>$</InputPrefix>
                                <TextInput
                                    id="additionalWithholdings"
                                    name="additionalWithholdings"
                                    value={formData.additionalWithholdings}
                                    type="number"
                                    onChange={handleChangeText}
                                />
                            </InputGroup>
                        </div>
                        <div>
                            <label htmlFor="filingStatus">{t("TaxInfo.Filing status")}:</label>

                            <div>
                                <Radio
                                    checked={radioSelectedValue === 'single'}
                                    id="single"
                                    label={t("TaxInfo.Single")}
                                    name="options"
                                    onChange={() => setSelectedValue("single")}
                                    value="single"
                                />
                                <Radio
                                    checked={radioSelectedValue === 'marriedJoint'}
                                    id="marriedJoint"
                                    label={t("TaxInfo.Married filing jointly")}
                                    name="options"
                                    onChange={() => setSelectedValue("marriedJoint")}
                                    value="marriedJoint"
                                />
                                <Radio
                                    checked={radioSelectedValue === 'marriedSeparate'}
                                    id="marriedSeparate"
                                    label={t("TaxInfo.Married filing separately")}
                                    name="options"
                                    onChange={() => setSelectedValue("marriedSeparate")}
                                    value="marriedSeperate"
                                />
                                <Radio
                                    checked={radioSelectedValue === 'headOfHousehold'}
                                    id="headOfHousehold"
                                    label={t("Head of household")}
                                    name="options"
                                    onChange={() => setSelectedValue("headOfHousehold")}
                                    value="headOfHousehold"
                                />
                            </div>

                        </div>

                        <div>
                            <label htmlFor="dependents">{t("TaxInfo.Dependents")}:</label>
                            <TextInput
                                id="dependents"
                                name="dependents"
                                value={formData.dependents}
                                type="number"
                                onChange={handleChangeText}
                            />
                        </div>

                        <div>
                            {/* <label htmlFor="standardDeduction">{t("TaxInfo.Student status")}:</label> */}
                            <Checkbox
                                id="standardDeduction"
                                name="standardDeduction"
                                checked={isTakingStandardDeduction}
                                onChange={() => {
                                    setIsTakingStandardDeduction(prev => !prev)
                                }}
                                label={t("TaxInfo.Standard deduction")} />
                        </div>
                        <div>
                            <Checkbox
                                id="studentStatus"
                                name="studentStatus"
                                checked={studentStatus}
                                onChange={() => {
                                    setStudentStatus(prev => !prev)
                                }}
                                label={t("TaxInfo.Student status")} />
                        </div>

                        <div>
                            <label htmlFor="specialDeductions">{t("TaxInfo.Special deductions")}:</label>
                            <InputGroup>
                                <InputPrefix>$</InputPrefix>
                                <TextInput
                                    disabled={isTakingStandardDeduction}
                                    id="specialDeductions"
                                    name="specialDeductions"
                                    value={formData.specialDeductions}
                                    type="number"
                                    onChange={handleChangeText}
                                />
                            </InputGroup>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </>


    );
};

export default FormMisc;
