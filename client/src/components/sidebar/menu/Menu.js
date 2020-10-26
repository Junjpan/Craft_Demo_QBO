import React from "react";
import "./menu.scss";
import MenuItem from "./../../../resuable_components/menuItem/MenuItem";
import PropTypes from 'prop-types';

const Menu = (props) => {
  return (
    <div className='sidebar_menu'>
      <MenuItem name='Dashboard'/>
      {props.noArrow?<MenuItem name='Banking'/>:<MenuItem name='Banking' arrow />}
      {props.noArrow?<MenuItem name='Expenses'/>:<MenuItem name='Expenses' arrow />}
      {props.noArrow?<MenuItem name='Sales'/>:<MenuItem name='Sales' arrow />} 
      <MenuItem name='Projects' href="/app/projects"/>
      {props.noArrow?<MenuItem name='Payroll'/>:<MenuItem name='Payroll' arrow />}       
      <MenuItem name='Reports' />
      <MenuItem name='Taxes' />
      <MenuItem name='Mileage' />
      {props.noArrow?<MenuItem name='Accounting' />:<MenuItem name='Accounting' arrow />}        
      <MenuItem name='My Accountant' />
      <MenuItem name='Insurace' />
    </div>
  );
};

Menu.propTypes={
  noArrow:PropTypes.bool
}
export default Menu;
