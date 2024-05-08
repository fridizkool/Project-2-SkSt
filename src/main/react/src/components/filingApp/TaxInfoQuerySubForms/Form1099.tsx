import { CardBody, CardHeader, Checkbox, TextInput } from '@trussworks/react-uswds';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-router-dom';
const Form1099: React.FC<Form1099Props> = ({ id, getDataCallback, initInfo }) => {
    const { t } = useTranslation();
    // Define the default initial state
    const defaultFormData = {
        userId: '',
        payerInformation: '',
        payerTin: '',
        recipientTin: '',
        recipientName: '',
        recipientAddress: '',
        recipientLocation: '',
        accountNumber: '',
        rents: '',
        royalties: '',
        otherIncome: '',
        withheldFederal: '',
        fishingBoat: '',
        healthcare: '',
        over5000: false,
        substitute: '',
        cropInsurance: '',
        attorney: '',
        fishPurchased: '',
        deferrals: '',
        fatca: false,
        goldenParachute: '',
        nonqualifiedDeferrals: ''
    };

    const sanitizedInitInfo = Object.fromEntries(
        Object.entries(initInfo).map(([key, value]) => [key, value === null ? '' : value])
    );

    // Merge initInfo with the default initial state
    const mergedFormData = { ...defaultFormData, ...sanitizedInitInfo };

    // Define state variable to store form data with the merged initial state
    const [formData, setFormData] = React.useState(mergedFormData);


    const [_, setIsChecked] = useState(false);

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

    return (
        <>
            <Form method="post" onBlur={handleFormChange}>
                <CardHeader>
                    <h1>{t("1099.form")}</h1>
                </CardHeader>
                <CardBody>
                    {/*Form box items */}
                    <div>
                        <label htmlFor="payerInformation">{t("1099.Payer information")}:</label>
                        <TextInput
                            id="payerInformation"
                            name="payerInformation"
                            value={formData.payerInformation}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="payerTin">{t("1099.Payer's TIN")}:</label>
                        <TextInput
                            id="payerTin"
                            name="payerTin"
                            value={formData.payerTin}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="recipientTin">{t("1099.Recipient's TIN")}:</label>
                        <TextInput
                            id="recipientTin"
                            name="recipientTin"
                            value={formData.recipientTin}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="recipientName">{t("1099.Recipient's name")}:</label>
                        <TextInput
                            id="recipientName"
                            name="recipientName"
                            value={formData.recipientName}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="recipientAddress">{t("1099.Recipient's address")}:</label>
                        <TextInput
                            id="recipientAddress"
                            name="recipientAddress"
                            value={formData.recipientAddress}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="recipientLocation">{t("1099.Recipient's location")}:</label>
                        <TextInput
                            id="recipientLocation"
                            name="recipientLocation"
                            value={formData.recipientLocation}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="accountNumber">{t("1099.Account number")}:</label>
                        <TextInput
                            id="accountNumber"
                            name="accountNumber"
                            value={formData.accountNumber}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="rents">{t("1099.Rents")}:</label>
                        <TextInput
                            id="rents"
                            name="rents"
                            value={formData.rents}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="royalties">{t("1099.Royalties")}:</label>
                        <TextInput
                            id="royalties"
                            name="royalties"
                            value={formData.royalties}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="otherIncome">{t("1099.Other income")}:</label>
                        <TextInput
                            id="otherIncome"
                            name="otherIncome"
                            value={formData.otherIncome}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="withheldFederal">{t("1099.Federal taxes withheld")}:</label>
                        <TextInput
                            id="withheldFederal"
                            name="withheldFederal"
                            value={formData.withheldFederal}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="fishingBoat">{t("1099.Fishing boat proceeds")}:</label>
                        <TextInput
                            id="fishingBoat"
                            name="fishingBoat"
                            value={formData.fishingBoat}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="healthcare">{t("1099.Medical and healthcare payments")}:</label>
                        <TextInput
                            id="healthcare"
                            name="healthcare"
                            value={formData.healthcare}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <Checkbox
                            id="over5000"
                            name="over5000"
                            checked={formData.over5000}
                            onChange={handleChangeCheckbox}
                            label={t("1099.5000")}
                        />
                    </div>

                    <div>
                        <label htmlFor="substitute">{t("1099.Substitute payments in lieu of dividends or interest")}:</label>
                        <TextInput
                            id="substitute"
                            name="substitute"
                            value={formData.substitute}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="cropInsurance">{t("1099.Crop insurance proceeds")}:</label>
                        <TextInput
                            id="cropInsurance"
                            name="cropInsurance"
                            value={formData.cropInsurance}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="attorney">{t("1099.Gross proceeds paid to an attorney")}:</label>
                        <TextInput
                            id="attorney"
                            name="attorney"
                            value={formData.attorney}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="fishPurchased">{t("1099.Fish purchased for resale")}:</label>
                        <TextInput
                            id="fishPurchased"
                            name="fishPurchased"
                            value={formData.fishPurchased}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="deferrals">{t("Section 409A deferrals")}:</label>
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
                            id="fatca"
                            name="fatca"
                            checked={formData.fatca}
                            onChange={handleChangeCheckbox}
                            label={t("1099.FATCA filing requirement")} />
                    </div>

                    <div>
                        <label htmlFor="goldenParachute">{t("1099.Excess golden parachute payments")}:</label>
                        <TextInput
                            id="goldenParachute"
                            name="goldenParachute"
                            value={formData.goldenParachute}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div>
                        <label htmlFor="nonqualifiedDeferrals">{t("1099.Nonqualified deferred compensation")}:</label>
                        <TextInput
                            id="nonqualifiedDeferrals"
                            name="nonqualifiedDeferrals"
                            value={formData.nonqualifiedDeferrals}
                            type="text"
                            onChange={handleChangeText}
                        />
                    </div>

                </CardBody>
            </Form>
        </>


    );
};

export default Form1099;
