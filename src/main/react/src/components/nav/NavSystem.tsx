import { Header, NavMenuButton, PrimaryNav, Link } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";
import UserAccountDropdown from "./UserAccountDropdown";


interface NavOptions {
  showAdminPriviledgedInfo: boolean,
  showUserPrivilegedInfo: boolean
}

interface NavSystemProps {
  navOptions: NavOptions;
  enabled: boolean;
}

export const NavSystem: React.FC<NavSystemProps> = ({ navOptions, enabled }) => {
      const [mobileNavOpen, setMobileNavOpen] = useState(false);

    let primaryNavItems: JSX.Element[] | React.ReactNode[] = [];
    if(navOptions.showAdminPriviledgedInfo){
      primaryNavItems = [
        <Link variant="nav" href={'/'}>Home</Link>,
        <Link variant="nav" href={'/filing'}>Calculator</Link>,  
        <Link variant="nav" href={'/users'}>Users</Link>,  
        <UserAccountDropdown/>  
      ]
    } else if (navOptions.showUserPrivilegedInfo){
      primaryNavItems = [
        <Link variant="nav" href={'/'}>Home</Link>,
        <Link variant="nav" href={'/filing'}>Calculator</Link>,  
        <UserAccountDropdown/>  
      ]
    } else {
      primaryNavItems = [
        <Link variant="nav" href={'/'}>Home</Link>,
        <Link variant="nav" href={'/filing'}>Calculator</Link>, 
        <Link variant="nav" href={'/login'}>Login</Link>,
        <Link variant="nav" href={'/create'}>Sign up</Link>,
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