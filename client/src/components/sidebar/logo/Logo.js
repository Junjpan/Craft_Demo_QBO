import React from "react";
import logo from "../../../assets/logo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className='logo'>
      <a href='https://app.qbo.intuit.com/app/homepage'>
        <img src={logo} alt='quickbook_logo' />
      </a>
    </div>
  );
};

export default Logo;
