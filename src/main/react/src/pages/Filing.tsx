import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Grid, Accordion, Form, Fieldset, Label, Radio, Card, GridContainer, DatePicker, TextInput, CardGroup, CardHeader, CardBody } from '@trussworks/react-uswds';
import React, { useEffect, useRef, useState } from 'react';

const url = "http://localhost:8080";
interface TaxFile {
    status?: string,
    dependent?: boolean,
    dependents?: number,
    income?: number,
    selfEmployed?: number,
    withheldFederal?: number,
    withheldSocial?: number,
    withheldMedicare?: number,
    student?: boolean,
    deductions?: number
}

export default function Filing() {
    const [taxState, setForm] = useState({});
    const calcRef = useRef(null);

    function updateForm(event: React.FormEvent<HTMLFormElement>) {
        if (event.currentTarget == null) return;
        const formData = new FormData(event.currentTarget);
        // if(formData == null) return;
        let tax: TaxFile = {
            status: formData.get('status')?.toString(),
            dependent: Boolean(formData.get('dependent')?.toString()),
            dependents: Number(formData.get('dependents')?.toString()),
            income: Number(formData.get('income')?.toString()),
            selfEmployed: Number(formData.get('selfEmployedIncome')?.toString()),
            withheldFederal: Number(formData.get('withheldFederal')?.toString()),
            withheldSocial: Number(formData.get('withheldSocial')?.toString()),
            withheldMedicare: Number(formData.get('withheldMedicare')?.toString()),
            student: Boolean(formData.get('studentInfo')?.toString()),
            deductions: Number(formData.get('deductions')?.toString())
        };
        setForm(tax);
        console.log(JSON.stringify(tax));
        fetch(url + "/taxinfo", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(tax)
        })
        .then( data => data.json())
        .then(returnedData => {
            calcRef.current = returnedData; //todo actual stuff
        })
    }


    function sendChanges(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // const general = new FormData(generalRef.current);

    }

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
                        <Label htmlFor="birthday" id='birthdayLabel'>Birthday</Label>
                        <DatePicker id="birthday" name="birthday" required aria-labelledby='birthdayLabel'></DatePicker>
                        <span>Are you a dependent?</span>
                        <Radio id="dependentYes" name="dependent" label="Yes" value='true' />
                        <Radio id="dependentNo" name="dependent" label="No" value='false' defaultChecked />
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
                        <Radio id="studentYes" name="studentInfo" label="Yes" value='true' />
                        <Radio id="studentNo" name="studentInfo" label="No" value='false' defaultChecked />
                        <Label htmlFor="deductions">Deductions</Label>
                        <TextInput id="deductions" name="deductions" type={'number'}></TextInput>
                    </Fieldset>
                </Card>,
            expanded: false,
            id: "other",
            headingLevel: "h3",
        },
    ];



    return (
        <>
            <GridContainer>
                <Grid row className='padding-1'>
                    <Grid col={6}>
                        <Form onSubmit={() => { }} onChange={updateForm} large>
                            <Accordion items={formItems} multiselectable={true} />
                        </Form>
                    </Grid>
                    <Grid col={5} offset={1}>
                        <CardGroup><Card gridLayout={{ col: 12 }}><CardHeader><h3 className="usa-card__heading">Tax calculations</h3></CardHeader><CardBody ref={calcRef}></CardBody></Card></CardGroup>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    );
}