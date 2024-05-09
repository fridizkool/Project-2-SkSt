import { SummaryBox, SummaryBoxContent, SummaryBoxHeading } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

export default function IntroPage() {
    const {t} = useTranslation();
    return <>
        <SummaryBox>
            <SummaryBoxHeading headingLevel="h1">{t("Filing information")}</SummaryBoxHeading>
            <SummaryBoxContent>
                <ul>
                    <li>{t("Submit many W2 forms")}</li>
                    <li>{t("Submit many 1099 forms")}</li>
                    <li>{t("Fill out some more information")}</li>
                    <li><i>{t("See how much you are expected to owe or be returned!")}</i></li>
                </ul>
            </SummaryBoxContent>
        </SummaryBox>
    </>
}

