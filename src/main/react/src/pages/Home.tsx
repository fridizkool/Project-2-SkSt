import LoginStatus from "../components/LoginStatus";
import LogoutButton from "../components/LogoutButton";

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