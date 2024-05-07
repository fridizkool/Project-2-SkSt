import { CardGroup, Card, CardHeader, CardBody } from "@trussworks/react-uswds"
import { useLoaderData } from "react-router-dom";

export default function TaxReturnStatus() {
    const totalReturns: any = useLoaderData() as any;

    return <>
        <CardGroup>
            <Card gridLayout={{ col: 12 }}>
                <CardHeader>
                    <h3 className="usa-card__heading">Tax calculations</h3>
                </CardHeader>
                <CardBody>
                    <div>
                        Total Federal Return
                        {`${totalReturns}`}
                    </div>

                    <div>
                        Total income for tax year 2024:
                    </div>

                    <div>
                        Total deductions taken: 
                    </div>
                </CardBody>
            </Card>
        </CardGroup>
    </>
}

