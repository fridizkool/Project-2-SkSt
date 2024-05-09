import { useLoaderData } from "react-router-dom";
import SupplementalHolder from "../TaxInfoQuerySubForms/SupplementalHolder";

export default function FormMiscInfoPage() {
    const existingForms: any = useLoaderData() as any;

    return <>
        <SupplementalHolder existingForms={existingForms}/>

    </>
}

