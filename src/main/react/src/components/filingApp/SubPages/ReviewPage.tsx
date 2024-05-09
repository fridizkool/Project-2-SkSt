import { Card, CardBody, CardGroup, CardHeader } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";

export default function ReviewPage() {
    const totals: any = useLoaderData() as any;
    const { t } = useTranslation();

    return (
        <>
            <CardGroup>
                <Card gridLayout={{ col: 4 }}>
                    <CardHeader>
                        <h1>W2</h1>
                        <hr />
                    </CardHeader>
                    <CardBody>
                        <p><strong>{t("W2 income")}: </strong>{"$" + totals.incomeW2.toFixed(2)}</p>
                        <p><strong>{t("W2 withheld")}: </strong>{"$" + totals.withheldW2.toFixed(2)}</p>
                    </CardBody>
                </Card>
                <Card gridLayout={{ col: 4 }}>
                    <CardHeader>
                        <h1>1099</h1>
                        <hr />
                    </CardHeader>
                    <CardBody>
                        <p><strong>{t("1099 income")}: </strong>{"$" + totals.income1099.toFixed(2)}</p>
                        <p><strong>{t("1099 withheld")}: </strong>{"$" + totals.withheld1099.toFixed(2)}</p>
                    </CardBody>
                </Card>
                <Card gridLayout={{ col: 4 }}>
                    <CardHeader>
                        <h1>{t("Personal")}</h1>
                        <hr />
                    </CardHeader>
                    <CardBody>
                        <p><strong>{t("Supplemental income")}: </strong>{"$" + totals.incomePersonal.toFixed(2)}</p>
                        <p><strong>{t("Additional withheld")}: </strong>{"$" + totals.withheldPersonal.toFixed(2)}</p>
                        <p><strong>{t("Deductions")}: </strong>{"$" + totals.deductions.toFixed(2)}</p>
                    </CardBody>
                </Card>
            </CardGroup>

        </>
    )
}

