import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { Title, Header, Grid, Accordion, Form, Fieldset, Label, Radio, Card, GridContainer, DatePicker, TextInput } from '@trussworks/react-uswds';

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
                        <Radio id="dependantYes" name="generalInfo" label="Yes" value='true' />
                        <Radio id="dependantNo" name="generalInfo" label="No" value='false' defaultChecked/>
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
                        <Label htmlFor="dependantsChildren">Under 17 dependants</Label>
                        <TextInput id="dependantsChildren" name="family" type={'number'}></TextInput>
                        <Label htmlFor="dependantsStudents">Student dependants</Label>
                        <TextInput id="dependantsStudents" name="family" type={'number'}></TextInput>
                        <Label htmlFor="dependantsOther">Other dependants</Label>
                        <TextInput id="dependantsOther" name="family" type={'number'}></TextInput>
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
        <div style={{width:'100vh'}}>
            <Header><Title>Tax filing 2024</Title></Header>
            <GridContainer containerSize="widescreen">
                <Grid row>
                    <Grid tablet={{ col: true }}>
                        <Accordion items={formItems} multiselectable={true} />
                    </Grid>
                    <Grid tablet={{ col: true }}>
                        <Card>Computing!</Card>
                    </Grid>
                </Grid>
            </GridContainer>
        </div>
    );
}