import { Outlet } from "react-router-dom";

export default function TaxFilingForm() {
    // Currently, existingForms is a list. 
    // index 0 = W2, index 1 = 1099, index 2 = Misc form.
    // const existingForms: any = useLoaderData() as any;

    return <>
        <Outlet/>
        {/* <ListOfW2 existingForms={existingForms[0]}/> */}
        {/* <ListOf1099 existingForms={existingForms[1]}/> */}
        {/* <SupplementalHolder existingForms={existingForms[2]}/> */}
    </>
}

