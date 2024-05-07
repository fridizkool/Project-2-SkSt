import { Link, Menu, NavDropDownButton } from "@trussworks/react-uswds";
import { useState } from "react";
import { t } from "../Internationization";

const UserAccountDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const testMenuItems = [
    <Link variant="nav" href={'/account'}>{t("profile.profile")}</Link>,
    <Link variant="nav" href={'/logout'}>{t("logout")}</Link>,
  ];
  const onToggle = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

    return <>
      <NavDropDownButton 
        menuId="UserAccountDropDown" 
        onToggle={(): void => {onToggle()}} 
        isOpen={isOpen} 
        label={t("account")} 
        isCurrent={true} 
      />
      <Menu key="one" items={testMenuItems} isOpen={isOpen} id="testDropDownOne" />
    </>;
  }
export default UserAccountDropdown;


