import { CardGroup, Card, CardHeader, CardBody, ProcessList, ProcessListItem, ProcessListHeading } from "@trussworks/react-uswds"
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";

export default function TaxReturnStatus() {
    const { t } = useTranslation();
    const totals: any = useLoaderData() as any;

    return <>
        <CardGroup>
            <Card gridLayout={{ col: 12 }}>
                <CardHeader>
                    <h3 className="usa-card__heading">{t("Calculations")}</h3>
                </CardHeader>
                <CardBody>
                    <ProcessList>
                        <ProcessListItem>
                            <ProcessListHeading type="h4">{t("Taxable income")}</ProcessListHeading>
                            <div>
                                <p>{t("W2 income")}: {"$" + totals.incomeW2.toFixed(2)}</p>
                                <p>{t("1099 income")}: {"$" + totals.income1099.toFixed(2)}</p>
                                <p>{t("Supplemental income")}: {"$" + totals.incomePersonal.toFixed(2)}</p>
                                <p>{t("Deductions")}: {"-$" + totals.deductions.toFixed(2)}</p>
                                <p><strong>{t("Total taxable income")}</strong>: ${(totals.incomePersonal + totals.income1099 + totals.incomeW2 - totals.deductions).toFixed(2)}</p>
                            </div>
                        </ProcessListItem>
                        <ProcessListItem>
                            <ProcessListHeading type="h4">{t("Taxed")}</ProcessListHeading>
                            <div>
                                <p><strong>{t("Effective tax rate")}</strong>: {`${totals.effective}`}</p>
                                <p><strong>{t("Taxed")}</strong>: {"$" + totals.tax.toFixed(2)}</p>
                            </div>
                        </ProcessListItem>
                        <ProcessListItem>
                            <ProcessListHeading type="h4">{t("Withheld")}</ProcessListHeading>
                            <div>
                                <p>{t("W2 withheld")}: {"$" + totals.withheldW2.toFixed(2)}</p>
                                <p>{t("1099 withheld")}: {"$" + totals.withheld1099.toFixed(2)}</p>
                                <p>{t("Additional withheld")}: {"$" + totals.withheldPersonal.toFixed(2)}</p>
                                <p><strong>{t("Total withheld")}</strong>: ${(totals.withheldPersonal + totals.withheld1099 + totals.withheldW2).toFixed(2)}</p>
                            </div>
                        </ProcessListItem>

                        <ProcessListItem>
                            <ProcessListHeading type="h3">{(totals.taxReturn >= 0.0 ? t("Taxes owed") + ": $" +  totals.taxReturn.toFixed(2) : t("Tax return") + ": $" + Math.abs(totals.taxReturn).toFixed(2))}</ProcessListHeading>
                        </ProcessListItem>
                    </ProcessList>
                </CardBody>
            </Card>
        </CardGroup>
    </>
}

