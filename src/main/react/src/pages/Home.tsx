import { Alert } from "@trussworks/react-uswds";
import splash from "../assets/calculating.jpeg";

export default function Home() {
    return (
        <>
            <div className="">
                <img src={splash} alt="slpash" className="object-fill h-full w-full" />
                <div className="h-7 bg-gradient-to-r from-sky-500 to-indigo-500 z-30 object-center"></div>
            </div>
            <Alert type="info" heading="NOTE" headingLevel="h4">
                This is an unofficial prototype product.
            </Alert>
        </>
    )
}