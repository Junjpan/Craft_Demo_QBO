import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuestionCircle,
  faSearch,
  faBell,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import './icon.scss';

const Icons = () => {
  return (
    <div>
      <ul className="icons">
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
          <span className="username">J</span>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
