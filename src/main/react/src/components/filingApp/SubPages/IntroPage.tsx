import { SummaryBox, SummaryBoxContent, SummaryBoxHeading } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

export default function IntroPage() {
    const {t} = useTranslation();
    return <>
        <SummaryBox>
            <SummaryBoxHeading headingLevel="h1">{t("Filing information")}</SummaryBoxHeading>
            <SummaryBoxContent>
                <ul>
                    <li>{t("Provide the necessary information from your W2's, 1099's, and any supplementary information if you have it. We'll do the rest!")}</li>

                </ul>
            </SummaryBoxContent>
        </SummaryBox>
    </>
}

