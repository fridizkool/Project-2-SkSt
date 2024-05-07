import { Title } from "@trussworks/react-uswds"
import icon from "../assets/icon.png";
import LoginStatus from "../components/accountManagement/LoginStatus";
import { Link } from "react-router-dom";
import { I18nButton, t } from "../components/Internationization"


function TitleBanner() {
  return (
    <>
      <div className="flex items-center justify-between"><Link type="nav" to={"/"}><div className="inline-flex items-center"><img src={icon} alt="logo" /><Title>{t("title")}</Title></div></Link><div><LoginStatus /><I18nButton /></div></div>
    </>
  )
}

export default TitleBanner