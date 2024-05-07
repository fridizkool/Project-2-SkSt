import { Header, NavMenuButton, PrimaryNav, Link } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";
import UserAccountDropdown from "./UserAccountDropdown";
import { useTranslation } from "react-i18next";


export const NavSystem: React.FC<NavSystemProps> = ({ navOptions, enabled }) => {
  const {t} = useTranslation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  let primaryNavItems: JSX.Element[] | React.ReactNode[] = [];
  if (navOptions.showAdminPriviledgedInfo) {
    primaryNavItems = [
      <Link variant="nav" href={'/'}>{t("home")}</Link>,
      <Link variant="nav" href={'/filing'}>{t("calculator")}</Link>,
      <Link variant="nav" href={'/users'}>{t("user_other")}</Link>,
      <UserAccountDropdown />
    ]
  } else if (navOptions.showUserPrivilegedInfo) {
    primaryNavItems = [
      <Link variant="nav" href={'/'}>{t("home")}</Link>,
      <Link variant="nav" href={'/filing'}>{t("calculator")}</Link>,
      <UserAccountDropdown />
    ]
  } else {
    primaryNavItems = [
      <Link variant="nav" href={'/'}>{t("home")}</Link>,
      <Link variant="nav" href={'/filing'}>{t("calculator")}</Link>,
      <Link variant="nav" href={'/login'}>{t("login")}</Link>,
      <Link variant="nav" href={'/create'}>{t("Sign up")}</Link>,
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