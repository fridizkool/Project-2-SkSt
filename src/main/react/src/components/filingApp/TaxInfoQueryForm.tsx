import { Card, Accordion, Fieldset, Form, Label, Radio, TextInput } from "@trussworks/react-uswds"
import { useState, useRef } from "react";

export default function TaxInfoQueryForm() {

    const [_, setForm] = useState({}); //taxState
    const calcRef = useRef<HTMLDivElement>(null);

    function updateForm(event: React.FormEvent<HTMLFormElement>) {
        // sendChange.start();
        if (event.currentTarget == null) return;
        const formData = new FormData(event.currentTarget);
        // if(formData == null) return;
        let tax: TaxFile = {
            userId: 1,
            filingStatus: (formData.get('status')?.toString() ? formData.get('status')?.toString() : ''),
            dependent: formData.get('dependent')?.toString() == 'True' ? true : false,
            dependents: (Number(formData.get('dependents')?.toString()) ? Number(formData.get('dependents')?.toString()) : 0),
            income: (Number(formData.get('income')?.toString()) ? Number(formData.get('income')?.toString()) : 0),
            selfEmployedIncome: (Number(formData.get('selfEmployedIncome')?.toString()) ? Number(formData.get('selfEmployedIncome')?.toString()) : 0),
            withheldFederal: (Number(formData.get('withheldFederal')?.toString()) ? Number(formData.get('withheldFederal')?.toString()) : 0),
            withheldSS: (Number(formData.get('withheldSocial')?.toString()) ? Number(formData.get('withheldSocial')?.toString()) : 0),
            withheldMedicare: (Number(formData.get('withheldMedicare')?.toString()) ? Number(formData.get('withheldMedicare')?.toString()) : 0),
            studentStatus: formData.get('studentInfo')?.toString() == 'True' ? true : false,
            specialDeductions: (Number(formData.get('deductions')?.toString()) ? Number(formData.get('deductions')?.toString()) : 0),
        };
        setForm(tax);
        console.log(tax);
        sendChange.setup(tax);
    }


    const sendChange = {    //not working yet
        timeoutID: -100,
        start() {
            this.timeoutID = -100;
        },
        setup(tax: TaxFile) {
            console.log(this.timeoutID);
            if (this.timeoutID > 0) {
                this.cancel();
            }
            this.timeoutID = window.setTimeout(
                (taxFile: TaxFile) => {
                    this.update(taxFile);
                }, 1000, tax
            )
            console.log(this.timeoutID);
        },
        update(taxFile: TaxFile) {
            if (calcRef.current == null) return;
            fetch("/taxinfo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taxFile)
            })
                .then(data => {
                    if (calcRef.current == null) return;
                    calcRef.current.innerText = JSON.stringify(taxFile);
                    data.json();
                })
            this.start();

        },
        cancel() {
            window.clearTimeout(this.timeoutID);
        },
    };

    const formItems: any = [
        {
            title: "General information",
            content:
                <Card>
                    <Fieldset>
                        <span>Filing status</span>
                        <Radio id="singleStatus" name="status" label="Single" value="single" defaultChecked />
                        <Radio id="marriedJointStatus" name="status" label="Married filed jointly" value="marriedJoint" />
                        <Radio id="marriedSeperateStatus" name="status" label="Married filed seperately" value="marriedSeperate" />
                        <Radio id="headofHouseholdStatus" name="status" label="Head of Household" value="headOfHousehold" />
                        <span>Are you a dependent?</span>
                        <Radio id="dependentYes" name="dependent" label="Yes" value="True" />
                        <Radio id="dependentNo" name="dependent" label="No" value="False" defaultChecked />
                        <Label htmlFor="dependents">Dependents</Label>
                        <TextInput id="dependents" name="dependents" type={'number'}></TextInput>
                    </Fieldset>
                </Card>,
            expanded: false,
            id: "general-info",
            headingLevel: "h3",
        },
        {
            title: "Income",
            content:
                <Card>
                    <Fieldset>
                        <Label htmlFor="annualIncome" id='incomeLabel'>Annual income</Label>
                        <TextInput id="annualIncome" name="income" type={'number'}></TextInput>
                        <Label htmlFor="selfEmployedIncome" id='selfEmployedIncome'>Self-employed income</Label>
                        <TextInput id="selfEmployedIncome" name="selfEmployedIncome" type={'number'}></TextInput>
                    </Fieldset>
                </Card>,
            expanded: false,
            id: "income",
            headingLevel: "h3",
        },
        {
            title: 'Withheld',
            content:
                <Card>
                    <Fieldset>
                        <Label htmlFor="withheldFederal" id='withheldFederalLabel'>Withheld federal taxes</Label>
                        <TextInput id="withheldFederal" name="withheldFederal" type={'number'}></TextInput>
                        <Label htmlFor="withheldSocial" id='withheldSocialLabel'>Withheld social security</Label>
                        <TextInput id="withheldSocial" name="withheldSocial" type={'number'}></TextInput>
                        <Label htmlFor="withheldMedicare" id='withheldMedicareLabel'>Withheld medicare</Label>
                        <TextInput id="withheldMedicare" name="withheldMedicare" type={'number'}></TextInput>
                    </Fieldset>
                </Card>,
            expanded: false,
            id: "withheld",
            headingLevel: "h3"
        },
        {
            title: "Other",
            content:
                <Card>
                    <Fieldset>
                        <span>Are you a student?</span>
                        <Radio id="studentYes" name="studentInfo" label="Yes" value='True' />
                        <Radio id="studentNo" name="studentInfo" label="No" value='False' defaultChecked />
                        <Label htmlFor="deductions">Deductions</Label>
                        <TextInput id="deductions" name="deductions" type={'number'}></TextInput>
                    </Fieldset>
                </Card>,
            expanded: false,
            id: "other",
            headingLevel: "h3",
        },
    ];



    return <>
        <Form onSubmit={() => { }} onChange={updateForm} large>
            <Accordion items={formItems} multiselectable={true} />
        </Form>

    </>
}
