import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      Subscribe now and save 50% <Link to='https://quickbooks.intuit.com/pricing/?sc=testdrive_US_QBO'>Subscribe Now</Link>
    </header>
  );
};

export default Header;
