import React from "react";
import CompanyName from "./companyName/CompanyName";
import Icons from "./icons/Icons";
import PropTypes from 'prop-types';
import "./navbar.scss";


const Navbar = (props) => {
  return (
    <nav className={props.sidebar?'navbar':'navbar_expand'}>
      <CompanyName {...props}/>
      <Icons {...props}/>
    </nav>
  );
};

Navbar.propTypes={
    sidebar:PropTypes.bool.isRequired
}

export default Navbar;
