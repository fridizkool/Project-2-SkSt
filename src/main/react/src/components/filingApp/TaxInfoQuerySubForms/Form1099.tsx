import { Accordion, Card, CardBody, CardHeader, Checkbox, TextInput } from '@trussworks/react-uswds';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
const Form1099: React.FC<Form1099Props> = ({ id, getDataCallback, initInfo }) => {
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

    const formItems: any = [{
        title: "Misc Information",
        content:
            <Card>
                {/* Misc form box items */}
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
                    <h1>IRS Form 1099</h1>
                </CardHeader>
                <CardBody>
                {/*Form box items */}
                <div>
                    <label htmlFor="payerInformation">Payer Information:</label>
                    <TextInput
                        id="payerInformation"
                        name="payerInformation"
                        value={formData.payerInformation}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="payerTin">Payer TIN:</label>
                    <TextInput
                        id="payerTin"
                        name="payerTin"
                        value={formData.payerTin}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="recipientTin">Recipient TIN:</label>
                    <TextInput
                        id="recipientTin"
                        name="recipientTin"
                        value={formData.recipientTin}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="recipientName">Recipient Name:</label>
                    <TextInput
                        id="recipientName"
                        name="recipientName"
                        value={formData.recipientName}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="recipientAddress">Recipient Address:</label>
                    <TextInput
                        id="recipientAddress"
                        name="recipientAddress"
                        value={formData.recipientAddress}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="recipientLocation">Recipient Location:</label>
                    <TextInput
                        id="recipientLocation"
                        name="recipientLocation"
                        value={formData.recipientLocation}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="accountNumber">Account Number:</label>
                    <TextInput
                        id="accountNumber"
                        name="accountNumber"
                        value={formData.accountNumber}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="rents">Rents:</label>
                    <TextInput
                        id="rents"
                        name="rents"
                        value={formData.rents}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="royalties">Royalties:</label>
                    <TextInput
                        id="royalties"
                        name="royalties"
                        value={formData.royalties}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="otherIncome">Other Income:</label>
                    <TextInput
                        id="otherIncome"
                        name="otherIncome"
                        value={formData.otherIncome}
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
                    <label htmlFor="fishingBoat">Fishing Boat:</label>
                    <TextInput
                        id="fishingBoat"
                        name="fishingBoat"
                        value={formData.fishingBoat}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="healthcare">Healthcare:</label>
                    <TextInput
                        id="healthcare"
                        name="healthcare"
                        value={formData.healthcare}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="over5000">Over 5000:</label>
                    <Checkbox
                            id="over5000"
                            name="over5000"
                            checked={formData.over5000}
                            onChange={handleChangeCheckbox} 
                            label={"over5000"}                    />
                </div>

                <div>
                    <label htmlFor="substitute">Substitute:</label>
                    <TextInput
                        id="substitute"
                        name="substitute"
                        value={formData.substitute}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="cropInsurance">Crop Insurance:</label>
                    <TextInput
                        id="cropInsurance"
                        name="cropInsurance"
                        value={formData.cropInsurance}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="attorney">Attorney:</label>
                    <TextInput
                        id="attorney"
                        name="attorney"
                        value={formData.attorney}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="fishPurchased">Fish Purchased:</label>
                    <TextInput
                        id="fishPurchased"
                        name="fishPurchased"
                        value={formData.fishPurchased}
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
                    <label htmlFor="fatca">FATCA:</label>
                    <Checkbox
                            id="fatca"
                            name="fatca"
                            checked={formData.fatca}
                            onChange={handleChangeCheckbox} 
                            label={"fatca"}                    />
                </div>

                <div>
                    <label htmlFor="goldenParachute">Golden Parachute:</label>
                    <TextInput
                        id="goldenParachute"
                        name="goldenParachute"
                        value={formData.goldenParachute}
                        type="text"
                        onChange={handleChangeText}
                    />
                </div>

                <div>
                    <label htmlFor="nonqualifiedDeferrals">Non-Qualified Deferrals:</label>
                    <TextInput
                        id="nonqualifiedDeferrals"
                        name="nonqualifiedDeferrals"
                        value={formData.nonqualifiedDeferrals}
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

export default Form1099;
