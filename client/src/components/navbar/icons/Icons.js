import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuestionCircle,
  faSearch,
  faBell,
  faCog,
  faPlusCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";
import "./icon.scss";

const Icons = (props) => {
  return (
    <div>
      <ul className='icons'>
        {!props.sidebar && (
          <li className="plus_icon">
            <FontAwesomeIcon
              icon={faPlusCircle}
              className='navbar_icon '
            ></FontAwesomeIcon>
          </li>
        )}
        <li className="plus_icon_hidden">
            <FontAwesomeIcon
              icon={faPlusCircle}
              className='navbar_icon '
            ></FontAwesomeIcon>
          </li>
        <li className="user_icon">
          <FontAwesomeIcon
            icon={faUser}
            className='navbar_icon '
          ></FontAwesomeIcon>
          <span>My Experts</span>
        </li>
        <li className="question_icon">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className='navbar_icon '
          ></FontAwesomeIcon>
          <span>Help</span>
        </li>
        <li className="search_icon">
          <FontAwesomeIcon
            icon={faSearch}
            className='navbar_icon '
          ></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faBell}
            className='navbar_icon'
          ></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon icon={faEllipsisV} className='navbar_icon ellipsis_icon' />
        </li>
        <li className="cog_icon">
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
