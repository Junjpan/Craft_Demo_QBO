import React from "react";
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Button from './button/Button';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Logo />
      <Button />
      <Menu />
    </div>
  );
};

export default Sidebar;
