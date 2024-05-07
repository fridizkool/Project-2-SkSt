import { Title } from "@trussworks/react-uswds"
import icon from "../assets/icon.png";
import LoginStatus from "../components/accountManagement/LoginStatus";

function TitleBanner() {
  return (
    <>
      <div className="flex items-center justify-between"><div className="inline-flex items-center"><img src={icon} alt="logo" /><Title>Clairvoyant Tax Prep</Title></div><LoginStatus /></div>
    </>
  )
}

export default TitleBanner