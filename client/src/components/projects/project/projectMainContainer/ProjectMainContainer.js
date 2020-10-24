import React, { useState } from "react";
import ProjectTab from "../../../../resuable_components/projectTab/ProjectTab";
import BackDrop from "../../../../resuable_components/backDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faShareSquare } from "@fortawesome/free-solid-svg-icons";
import PopUp from './Popup/PopUp';

export const ProjectMainContainer = () => {
  const [backdrop, setBackdrop] = useState(true);

  const close=()=>{
      setBackdrop(false)
  }

  return (
    <div className='container'>
      {backdrop && <BackDrop />}
      
      <div className='project_main_container'>
        <div className='project_tab_group'>
          <ProjectTab name='Overview'>
              {backdrop&&<PopUp close={close}/>}
          </ProjectTab>
          <ProjectTab name='Transactions' />
          <ProjectTab name='Time Activity' />
          <ProjectTab name='Project Reports' />
        </div>

        <div className="Project_main_container_details">
          <div className='hourly_costs_checkbox'>
            <input type='checkbox' defaultChecked />
            <p style={{fontSize:"15px"}}>Show hourly costs</p>
            <FontAwesomeIcon icon={faPrint} />
            <FontAwesomeIcon icon={faShareSquare} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMainContainer;
