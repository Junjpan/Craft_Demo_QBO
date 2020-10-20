import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./companyName.scss";

const CompanyName = (props) => {
  return (
    <div className='companyName' onClick={props.onClick}>
      <div className='faBars_icon'>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <p>Sample Company</p>
    </div>
  );
};

CompanyName.propTypes={
    onClick:PropTypes.func.isRequired
}

export default CompanyName;
