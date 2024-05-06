import { useLoaderData } from "react-router-dom";
import FormMisc from "./TaxInfoQuerySubForms/FormMisc"
import ListOfW2 from "./TaxInfoQuerySubForms/ListOfW2"

export default function TaxReturnStatus() {
    const existingForms: any = useLoaderData() as any;

    return <>
        <ListOfW2 existingForms={existingForms}/>
        <FormMisc/>
    </>
}

