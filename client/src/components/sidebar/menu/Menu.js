import React from "react";
import "./menu.scss";
import MenuItem from "./../../../resuable_components/menuItem/MenuItem";

const Menu = () => {
  return (
    <div className='sidebar_menu'>
      <MenuItem name='Dashboard'/>
      <MenuItem name='Banking' arrow />
      <MenuItem name='Expenses' arrow />
      <MenuItem name='Sales' arrow />
      <MenuItem name='Projects' href="/app/projects"/>
      <MenuItem name='Payroll' arrow />
      <MenuItem name='Reports' />
      <MenuItem name='Taxes' />
      <MenuItem name='Mileage' />
      <MenuItem name='Accounting' arrow />
      <MenuItem name='My Accountant' />
    </div>
  );
};

export default Menu;
