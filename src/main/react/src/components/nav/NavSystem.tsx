import { NavDropDownButton, Menu, GridContainer, SocialLink, FooterNav, Grid, Logo, SocialLinks, Address, GovBanner, Header, Title, NavMenuButton, ExtendedNav, Search, MediaBlockBody, Footer, PrimaryNav, Link } from "@trussworks/react-uswds";
import React, { useState } from "react";

export function NavSystem(): React.ReactElement {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [navDropdownOpen, setNavDropdownOpen] = useState([false, false]);

    const primaryNavItems = [
      <Link variant="nav" href={'/'}>Home</Link>,
      <Link variant="nav" href={'/login'}>Login</Link>,
      <Link variant="nav" href={'/filing'}>Calculator</Link>,  
      <Link variant="nav" href={'/users'}>Users</Link>,  
      <Link variant="nav" href={'/account'}>My Account</Link> //TODO Organize into drop downs   
    ];

    const handleToggleNavDropdown = (index: number): void => {
    setNavDropdownOpen(prevNavDropdownOpen => {
        const newOpenState = Array(prevNavDropdownOpen.length).fill(false);
        // eslint-disable-next-line security/detect-object-injection
        newOpenState[index] = !prevNavDropdownOpen[index];
        return newOpenState;
    });
    };
    const toggleMobileNav = (): void => {
    setMobileNavOpen(prevOpen => !prevOpen);
    };

  


    const returnToTop = <GridContainer className="usa-footer__return-to-top">
        <a href="#">Return to top</a>
    </GridContainer>;

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