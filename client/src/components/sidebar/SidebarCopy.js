import React from "react";
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Button from './button/Button';

const SidebarCopy = () => {
    console.log("hello")
  return (
    <div className='sidebarCopy'>
      <Logo />
      <Button />
      <Menu noArrow/>
    </div>
  );
};

export default SidebarCopy;
