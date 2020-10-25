import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faEquals } from "@fortawesome/free-solid-svg-icons";
import "./projectcontainer.scss";

const ProjectContainer = (props) => {
  return (
    <div className='subContainer'>
      <div>
        <div className='subcontainer_top'>
          <p className='number'>{props.number}</p>
          <p className='subcontainer_name'>{props.name}</p>
          <div className='sign'>
            {props.sign === "minus" ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faEquals} />
            )}
          </div>
        </div>
      </div>
      <section>{props.children}</section>
    </div>
  );
};

ProjectContainer.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sign: PropTypes.string,
  children: PropTypes.node,
};

export default ProjectContainer;
