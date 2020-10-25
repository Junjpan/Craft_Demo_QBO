import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faEquals } from "@fortawesome/free-solid-svg-icons";
import "./projectcontainer.scss";

const ProjectContainer = (props) => {
 const compareSign=(sign)=>{
   if (sign==="minus"){
     return <div className='sign'><FontAwesomeIcon icon={faMinus} /></div>
   }else if(sign==='equal'){
    return <div className='sign'><FontAwesomeIcon icon={faEquals} /></div>
   }
 }

  return (
    <div className='subContainer'>
      <div>
        <div className='subcontainer_top'>
          <p className='number'>{props.number}</p>
          <p className='subcontainer_name'>{props.name}</p>
            {compareSign(props.sign)}
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
