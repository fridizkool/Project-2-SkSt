import { Alert } from "@trussworks/react-uswds";
import LoginStatus from "../components/accountManagement/LoginStatus";

export default function Home()
{
    return (
        <>
            <p> The Home Page</p>

            <Alert type="info" heading="NOTE" headingLevel="h4">
                This is an unofficial prototype product.
            </Alert>
            
            <LoginStatus/>
        </>
    )
}