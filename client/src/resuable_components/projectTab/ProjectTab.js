import React,{forwardRef} from "react";
import PropTypes from "prop-types";


const ProjectTab = forwardRef((props,ref) => {
  return (
    <div className="tab">
      <button className='project_tab' ref={ref}>{props.name}</button>
      {props.children}
    </div>
  );
});

ProjectTab.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ProjectTab;
