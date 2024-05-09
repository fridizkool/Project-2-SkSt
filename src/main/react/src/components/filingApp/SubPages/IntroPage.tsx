import { SummaryBox, SummaryBoxContent, SummaryBoxHeading } from "@trussworks/react-uswds";

export default function IntroPage() {
    return <>
        <SummaryBox>
            <SummaryBoxHeading headingLevel="h1">Filing information</SummaryBoxHeading>
            <SummaryBoxContent>
                <ul>
                    <li>Submit many W2 forms</li>
                    <li>Submit many 1099 forms</li>
                    <li>Fill out some more information</li>
                    <li><i>See how much you are expected to owe or be returned!</i></li>
                </ul>
            </SummaryBoxContent>
        </SummaryBox>
    </>
}

