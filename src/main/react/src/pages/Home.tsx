import { Alert } from "@trussworks/react-uswds";
import splash from "../assets/calculating.jpeg";

export default function Home() {
    return (
        <>
            <div className="">
                <img src={splash} alt="slpash" className="object-fill h-full w-full" />
            </div>
            <Alert type="info" heading="NOTE" headingLevel="h4">
                This is an unofficial prototype product.
            </Alert>
        </>
    )
}