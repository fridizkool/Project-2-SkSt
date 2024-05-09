import { Link } from "react-router-dom";
import splash from "../assets/calculating.jpeg";

export default function Home() {
    return (
        <>
            <div className="top-0 left-0 z-0">
                <img src={splash} alt="slpash" className="object-fill h-full w-full" />
            </div>
            <div className="absolute top-1/3 min-h-screen px-10">
                <div className="bg-primary-darker text-base-lighter border-base-light ">
                    <div className="usa-hero__callout">
                        <h1 className="usa-hero__heading">
                            Start your taxes off right!
                        </h1>
                        <p>
                            <h2>
                                Welcome to Clairvoyant Tax Prep!
                                Please sign up and use our services to calculate your taxes!
                            </h2>
                        </p>
                        <div className="pt-1"><Link to={"/create"} className="usa-button">Sign up</Link></div>
                    </div>
                </div>
            </div >
        </>
    )
}