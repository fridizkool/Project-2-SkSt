import { Menu, NavDropDownButton } from "@trussworks/react-uswds";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const UserAccountDropdown: React.FC = () => {
  const {t} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const testMenuItems = [
    <Link type="nav" to={'/account'}>{t("profile.profile")}</Link>,
    <Link type="nav" to={'/logout'}>{t("logout")}</Link>,
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


