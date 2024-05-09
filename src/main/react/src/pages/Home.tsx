import { Link } from "react-router-dom";
import splash from "../assets/calculating.jpeg";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <div className="top-0 left-0 z-0">
                <img src={splash} alt="slpash" className="object-fill h-full w-full" />
            </div>
            <div className="absolute top-1/3 min-h-screen px-10">
                <div className="bg-primary-darker text-base-lighter border-base-light ">
                    <div className="usa-hero__callout">
                        <h1 className="usa-hero__heading">
                            {t("Start your taxes off right!")}
                        </h1>
                        <p>
                            <h2>
                                {t("Welcome to Clairvoyant Tax Prep! Please sign up and use our services to calculate your taxes!")}
                            </h2>
                        </p>
                        <div className="pt-1"><Link to={"/create"} className="usa-button">{t("Sign up")}</Link></div>
                    </div>
                </div>
            </div >
        </>
    )
}