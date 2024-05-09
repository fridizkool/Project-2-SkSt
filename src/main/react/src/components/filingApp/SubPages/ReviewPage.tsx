import { useLoaderData } from "react-router-dom";

export default function ReviewPage() {
    const totals: any = useLoaderData() as any;

    return <>
        <p> Total Income {`${totals.totalIncome}`} </p>


        <p> Total Withholdings {`${totals.totalWithholdings}`}</p>


        <p> Total Deductions {`${totals.totalDeductions}`}</p>
        
        <p> Click next to calculate return</p>

    </>
}

