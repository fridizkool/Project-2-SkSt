import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Grid, Accordion, Form, Fieldset, Label, Radio, Card, GridContainer, DatePicker, TextInput } from '@trussworks/react-uswds';
import LogoutButton from '../components/LogoutButton';

export default function Filing() {
    const formItems: any = [
        {
            title: "General info",
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
                            <DatePicker id="birthday" name="generalInfo" required aria-labelledby='birthdayLabel'></DatePicker>
                            <span>Dependent</span>
                            <Radio id="dependentYes" name="generalInfo" label="Yes" value='true' />
                            <Radio id="dependentNo" name="generalInfo" label="No" value='false' defaultChecked />
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
                            <Label htmlFor="unemployedIncome" id='unemployedLabel'>Unemployed income</Label>
                            <TextInput id="unemployedIncome" name="income" type={'number'}></TextInput>
                            <Label htmlFor="withheldFederal" id='withheldLabel'>Withheld federal taxes</Label>
                            <TextInput id="withheldFederal" name="income" type={'number'}></TextInput>
                        </Fieldset>
                    </Form>
                </Card>,
            expanded: false,
            id: "income",
            headingLevel: "h3",
        },
        {
            title: "Family",
            content:
                <Card>
                    <Form onSubmit={() => { }} large>
                        <Fieldset>
                            <Label htmlFor="dependentsChildren">Under 17 dependents</Label>
                            <TextInput id="dependentsChildren" name="family" type={'number'}></TextInput>
                            <Label htmlFor="dependentsStudents">Student dependents</Label>
                            <TextInput id="dependentsStudents" name="family" type={'number'}></TextInput>
                            <Label htmlFor="dependentsOther">Other dependents</Label>
                            <TextInput id="dependentsOther" name="family" type={'number'}></TextInput>
                            <Label htmlFor="childcareChildren">Children in childcare</Label>
                            <TextInput id="childcareChildren" name="family" type={'number'}></TextInput>
                            <Label htmlFor="childcare">Childcare expense</Label>
                            <TextInput id="childcare" name="family" type={'number'}></TextInput>
                        </Fieldset>
                    </Form>
                </Card>,
            expanded: false,
            id: "family",
            headingLevel: "h3",
        },
    ];



    return (
        <>
            <GridContainer>
                <Grid row className='padding-1'>
                    <Grid col={6}>
                        <Accordion items={formItems} multiselectable={true}/>
                    </Grid>
                    <Grid col={6}>
                        <Card>Computing!</Card>
                    </Grid>
                </Grid>
            </GridContainer>
            <LogoutButton/>
        </>
    );
}