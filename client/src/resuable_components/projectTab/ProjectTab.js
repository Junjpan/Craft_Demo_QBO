import React from "react";
import PropTypes from "prop-types";

const ProjectTab = (props) => {
  return (
    <div className="tab">
      <button className='project_tab'>{props.name}</button>
      {props.children}
    </div>
  );
};

ProjectTab.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ProjectTab;
