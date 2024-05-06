import FormW2 from "./TaxInfoQuerySubForms/FormW2"
import Form1099 from "./TaxInfoQuerySubForms/Form1099"
import FormMisc from "./TaxInfoQuerySubForms/FormMisc"
import ListOfW2 from "./TaxInfoQuerySubForms/ListOfW2"

export default function TaxReturnStatus() {
    return <>
        <ListOfW2/>
        <FormMisc/>
    </>
}

