import React from "react";
import MenuItem from "./../../../resuable_components/menuItem/MenuItem";
import PropTypes from "prop-types";

const Menu = (props) => {
  return (
    <div className='sidebar_menu'>
      <MenuItem name='Dashboard' />

      {props.noArrow ? (
        <MenuItem name='Banking' />
      ) : (
        <MenuItem name='Banking' arrow>
          <div>Banking</div>
          <div>Rules</div>
          <div>Receipts</div>
        </MenuItem>
      )}

      {props.noArrow ? (
        <MenuItem name='Expenses' />
      ) : (
        <MenuItem name='Expenses' arrow>
          <div>Expenses</div>
          <div>Vendors</div>
        </MenuItem>
      )}

      {props.noArrow ? (
        <MenuItem name='Sales' />
      ) : (
        <MenuItem name='Sales' arrow>
          <div>Overview</div>
          <div>All Sales</div>
          <div>Invoices</div>
          <div>Customers</div>
          <div>Products and services</div>
        </MenuItem>
      )}

      <MenuItem name='Projects' href='/app/projects' />

      {props.noArrow ? (
        <MenuItem name='Payroll' />
      ) : (
        <MenuItem name='Payroll' arrow>
          <div>Employees</div>
          <div>Contractors</div>
          <div>Workers' Comp</div>
        </MenuItem>
      )}

      <MenuItem name='Reports' />
      <MenuItem name='Taxes' />
      <MenuItem name='Mileage' />

      {props.noArrow ? (
        <MenuItem name='Accounting' />
      ) : (
        <MenuItem name='Accounting' arrow>
          <div>Chart of Accounts</div>
          <div>Reconcile</div>
        </MenuItem>
      )}

      <MenuItem name='My Accountant' />
      <MenuItem name='Insurace' />
    </div>
  );
};

Menu.propTypes = {
  noArrow: PropTypes.bool,
};
export default Menu;
