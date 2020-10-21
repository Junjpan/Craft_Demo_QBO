import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuestionCircle,
  faSearch,
  faBell,
  faCog,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";
import "./icon.scss";

const Icons = (props) => {
  return (
    <div>
      <ul className='icons'>
        {!props.sidebar && (
          <li>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className='navbar_icon'
            ></FontAwesomeIcon>
          </li>
        )}
        <li>
          <FontAwesomeIcon
            icon={faUser}
            className='navbar_icon'
          ></FontAwesomeIcon>
          <span>My Experts</span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className='navbar_icon'
          ></FontAwesomeIcon>
          <span>Help</span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faSearch}
            className='navbar_icon'
          ></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faBell}
            className='navbar_icon'
          ></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCog}
            className='navbar_icon'
          ></FontAwesomeIcon>
        </li>
        <li>
          <span className='username'>J</span>
        </li>
      </ul>
    </div>
  );
};

Icons.propTypes = {
  sidebar: PropTypes.bool,
};
export default Icons;
