import { Title } from "@trussworks/react-uswds"
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";
import { I18nButton } from "../components/Internationization"


function TitleBanner() {
  return (
    <>
      <div className="flex items-center justify-between"><Link type="nav" to={"/"}><div className="inline-flex items-center"><img src={icon} alt="logo" /><Title>Clairvoyant Tax Prep</Title></div></Link><div><I18nButton /></div></div>
    </>
  )
}

export default TitleBanner