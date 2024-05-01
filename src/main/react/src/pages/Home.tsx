import LoginStatus from "../components/accountManagement/LoginStatus";
import LogoutButton from "../components/accountManagement/LogoutButton";

export default function Home()
{
    return (
        <>
        <p> The Home Page</p>
            <LogoutButton/>
            <LoginStatus/>
        </>
    )
}