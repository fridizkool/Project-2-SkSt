import { useLoaderData } from "react-router-dom";
import ListOfW2 from "./TaxInfoQuerySubForms/ListOfW2"
import SupplementalHolder from "./TaxInfoQuerySubForms/SupplementalHolder";
import ListOf1099 from "./TaxInfoQuerySubForms/ListOf1099";

export default function TaxReturnStatus() {
    // Currently, existingForms is a list. 
    // index 0 = W2, index 1 = 1099, index 2 = Misc form.
    const existingForms: any = useLoaderData() as any;

    return <>
        <ListOfW2 existingForms={existingForms[0]}/>
        <ListOf1099 existingForms={existingForms[1]}/>
        <SupplementalHolder existingForms={existingForms[2]}/>
    </>
}

