import { Header, NavMenuButton, PrimaryNav } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";
import UserAccountDropdown from "./UserAccountDropdown";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export const NavSystem: React.FC<NavSystemProps> = ({ navOptions, enabled }) => {
  const {t} = useTranslation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  let primaryNavItems: JSX.Element[] | React.ReactNode[] = [];
  if (navOptions.showAdminPriviledgedInfo) {
    primaryNavItems = [
      <Link type="nav" to={'/'}>{t("home")}</Link>,
      <Link type="nav" to={'/filing'}>{t("calculator")}</Link>,
      <Link type="nav" to={'/users'}>{t("user_other")}</Link>,
      <UserAccountDropdown />
    ]
  } else if (navOptions.showUserPrivilegedInfo) {
    primaryNavItems = [
      <Link type="nav" to={'/'}>{t("home")}</Link>,
      <Link type="nav" to={'/filing'}>{t("calculator")}</Link>,
      <UserAccountDropdown />
    ]
  } else {
    primaryNavItems = [
      <Link type="nav" to={'/'}>{t("home")}</Link>,
      <Link type="nav" to={'/filing'}>{t("calculator")}</Link>,
      <Link type="nav" to={'/login'}>{t("login")}</Link>,
      <Link type="nav" to={'/create'}>{t("Sign up")}</Link>,
    ]
  }

  const toggleMobileNav = (): void => {
    setMobileNavOpen(prevOpen => !prevOpen);
  };

  return <>
    {enabled &&
      <Header showMobileOverlay={mobileNavOpen}>
        <div className="usa-navbar">
          <NavMenuButton label="Menu" onClick={toggleMobileNav} className="usa-menu-btn" />
        </div>
        <PrimaryNav aria-label="Primary navigation" items={primaryNavItems} onToggleMobileNav={toggleMobileNav} mobileExpanded={mobileNavOpen}>
        </PrimaryNav>

      </Header>
    }
  </>

}