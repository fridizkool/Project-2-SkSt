import { Header, NavMenuButton, PrimaryNav, Link } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";
import UserAccountDropdown from "./UserAccountDropdown";



export function NavSystem(props : any): React.ReactElement {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    let primaryNavItems: JSX.Element[] | React.ReactNode[] = [];
    const navOptions = props.navOptions
    if(navOptions.showAdminPriviledgedInfo){
      primaryNavItems = [
        <Link variant="nav" href={'/'}>Home</Link>,
        <Link variant="nav" href={'/filing'}>Calculator</Link>,  
        <Link variant="nav" href={'/users'}>Users</Link>,  
        <Link variant="nav" href={'/account'}>My Account</Link> //TODO Organize into drop downs   
      ]
    } else if (navOptions.showUserPrivilegedInfo){
      primaryNavItems = [
        <Link variant="nav" href={'/'}>Home</Link>,
        <Link variant="nav" href={'/filing'}>Calculator</Link>,  
        <Link variant="nav" href={'/account'}>My Account</Link>, //TODO Organize into drop downs 
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
      <Header extended showMobileOverlay={mobileNavOpen}>
        <div className="usa-navbar">
          <NavMenuButton label="Menu" onClick={toggleMobileNav} className="usa-menu-btn" />
        </div>
        <PrimaryNav aria-label="Primary navigation" items={primaryNavItems} onToggleMobileNav={toggleMobileNav} mobileExpanded={mobileNavOpen}>
        </PrimaryNav>
      </Header>
  </>

}