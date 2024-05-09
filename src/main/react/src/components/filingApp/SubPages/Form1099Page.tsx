import { useLoaderData } from "react-router-dom";
import ListOf1099 from "../TaxInfoQuerySubForms/ListOf1099";

export default function Form1099Page() {
    const existingForms: any = useLoaderData() as any;

    return <>
        <ListOf1099 existingForms={existingForms} />

    </>
}

