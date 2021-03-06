import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./menuItem.scss";

const MenuItem = (props) => {
  return (
    <div className='menu_item' role="menubar" aria-label="sidebar-menu">
      <a className="menu_item_content" href={props.href?`${props.href}`:'#'} role="button" aria-haspopup="true" aria-expanded="true">
        <span>{props.name}</span>
        <span>
          {props.arrow && (
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ color: "lightgray" }}
            />
          )}{" "}
        </span>{" "}
      </a>
      {props.children&&<div className='sideMenu'>{props.children}</div>}
      
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  arrow: PropTypes.bool,
  children: PropTypes.node,
  href:PropTypes.string
};

export default MenuItem;
