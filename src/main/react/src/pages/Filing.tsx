import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Grid, Accordion, Form, Fieldset, Label, Radio, Card, GridContainer, DatePicker, TextInput } from '@trussworks/react-uswds';
import LogoutButton from '../components/LogoutButton';
import LoginStatus from '../components/LoginStatus';

export default function Filing() {
    const formItems: any = [
        {
            title: "General information",
            content:
                <Card>
                    <Form onSubmit={() => { }} large>
                        <Fieldset>
                            <span>Filing status</span>
                            <Radio id="singleStatus" name="status" defaultChecked label="Single" value="single" />
                            <Radio id="marriedJointStatus" name="status" label="Married filed jointly" value="marriedJoint" />
                            <Radio id="marriedSeperateStatus" name="status" label="Married filed seperately" value="marriedSeperate" />
                            <Radio id="headofHouseholdStatus" name="status" label="Head of Household" value="headOfHousehold" />
                            <Label htmlFor="birthday" id='birthdayLabel'>Birthday</Label>
                            <DatePicker id="birthday" name="birthday" required aria-labelledby='birthdayLabel'></DatePicker>
                            <span>Are you a dependent?</span>
                            <Radio id="dependentYes" name="dependent" label="Yes" value='true' />
                            <Radio id="dependentNo" name="dependent" label="No" value='false' defaultChecked />
                            <Label htmlFor="dependents">Dependents</Label>
                            <TextInput id="dependents" name="family" type={'number'}></TextInput>
                        </Fieldset>
                    </Form>
                </Card>,
            expanded: false,
            id: "general-info",
            headingLevel: "h3",
        },
        {
            title: "Income",
            content:
                <Card>
                    <Form onSubmit={() => { }} large>
                        <Fieldset>
                            <Label htmlFor="annualIncome" id='incomeLabel'>Annual income</Label>
                            <TextInput id="annualIncome" name="income" type={'number'}></TextInput>
                            <Label htmlFor="selfEmployedIncome" id='selfEmployedIncome'>Self-employed income</Label>
                            <TextInput id="selfEmployedIncome" name="incomeSelfEmployment" type={'number'}></TextInput>
                        </Fieldset>
                    </Form>
                </Card>,
            expanded: false,
            id: "income",
            headingLevel: "h3",
        },
        {
            title: 'Withheld',
            content:
                <Card>
                    <Form onSubmit={() => { }}>
                        <Fieldset>
                            <Label htmlFor="withheldFederal" id='withheldFederalLabel'>Withheld federal taxes</Label>
                            <TextInput id="withheldFederal" name="withheldFederal" type={'number'}></TextInput>
                            <Label htmlFor="withheldSocial" id='withheldSocialLabel'>Withheld social security</Label>
                            <TextInput id="withheldSocial" name="withheldSocial" type={'number'}></TextInput>
                            <Label htmlFor="withheldMedicare" id='withheldMedicareLabel'>Withheld medicare</Label>
                            <TextInput id="withheldMedicare" name="withheldMedicare" type={'number'}></TextInput>
                        </Fieldset>
                    </Form>
                </Card>,
            expanded: false,
            id: "withheld",
            headingLevel: "h3"
        },
        {
            title: "Other",
            content:
                <Card>
                    <Form onSubmit={() => { }} large>
                        <Fieldset>
                            <span>Are you a student?</span>
                            <Radio id="studentYes" name="studentInfo" label="Yes" value='true' />
                            <Radio id="studentNo" name="studentInfo" label="No" value='false' defaultChecked />
                            <Label htmlFor="deductions">Deductions</Label>
                            <TextInput id="deductions" name="deductions" type={'number'}></TextInput>
                        </Fieldset>
                    </Form>
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
                        <Accordion items={formItems} multiselectable={true} />
                    </Grid>
                    <Grid col={6}>
                        <Card>Computing!</Card>
                    </Grid>
                </Grid>
            </GridContainer>
            <LogoutButton/>
            <LoginStatus/>

        </>
    );
}