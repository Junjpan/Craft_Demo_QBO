import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faStickyNote,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const SubNavbar = ({ data }) => {
  return (
    <div className='subnavbar'>
      <div>
        <span>{data.customer}</span>
        <span>
          In Progress{" "}
          <FontAwesomeIcon icon={faCaretDown} style={{ color: "#393a3d" }} />
        </span>
        <span>
          <FontAwesomeIcon icon={faStickyNote} /> View
        </span>
        <span className='star'>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
      <div>
        <button className="edit_button">Edit</button>
        <button className="add_project_button">
          Add to Project <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
    </div>
  );
};

SubNavbar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SubNavbar;
