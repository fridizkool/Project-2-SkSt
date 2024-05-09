import { useLoaderData } from "react-router-dom";
import ListOfW2 from "../TaxInfoQuerySubForms/ListOfW2";

export default function FormW2Page() {
    const existingForms: any = useLoaderData() as any;

    return <>
        <ListOfW2 existingForms={existingForms}/>
    </>
}

