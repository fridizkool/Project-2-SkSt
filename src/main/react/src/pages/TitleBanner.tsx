import { Title } from "@trussworks/react-uswds"
import icon from "../assets/icon.png";

function TitleBanner() {
    return (
      <>
        <div className="inline-flex items-center"><img src={icon} alt="logo"/><Title>Clairvoyant Tax Prep</Title></div>
      </>
    )
  }
  
  export default TitleBanner