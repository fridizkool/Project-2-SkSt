import { Link, Menu, NavDropDownButton } from "@trussworks/react-uswds";
import { useState } from "react";

const UserAccountDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const testMenuItems = [
    <Link variant="nav" href={'/account'}>Profile</Link>,
    <Link variant="nav" href={'/logout'}>Log out</Link>,
  ];
  const onToggle = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

    return <>
      <NavDropDownButton 
        menuId="UserAccountDropDown" 
        onToggle={(): void => {onToggle()}} 
        isOpen={isOpen} 
        label="My account" 
        isCurrent={true} 
      />
      <Menu key="one" items={testMenuItems} isOpen={isOpen} id="testDropDownOne" />
    </>;
  }
export default UserAccountDropdown;


