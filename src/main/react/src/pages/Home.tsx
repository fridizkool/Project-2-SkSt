import { LandingPage } from "../components/LandingPage";
import LoginStatus from "../components/LoginStatus";
import LogoutButton from "../components/LogoutButton";

export default function Home()
{
    return (
        <>
            <LandingPage />
            <LogoutButton/>
            <LoginStatus/>

        </>
    )
}