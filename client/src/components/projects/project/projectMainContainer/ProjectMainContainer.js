import React, { useState, useRef, useEffect } from "react";
import ProjectTab from "../../../../resuable_components/projectTab/ProjectTab";
import BackDrop from "../../../../resuable_components/backDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faShareSquare } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./Popup/PopUp";
import ProjectContainer from "./../../../../resuable_components/container/ProjectContainer";
import ProjectDetailContainer from "./../../../../resuable_components/projectDetailContainer/ProjectDetailContainer";

export const ProjectMainContainer = () => {
  const [backdrop, setBackdrop] = useState(true);
  const overViewRef = useRef(null);

  useEffect(() => {
    overViewRef.current.focus();
  }, []);

  const close = () => {
    setBackdrop(false);
  };

  return (
    <div className='container'>
      {backdrop && <BackDrop />}

      <div className='project_main_container'>
        <div className='project_tab_group'>
          <ProjectTab name='Overview' ref={overViewRef}>
            {backdrop && <PopUp close={close} />}
          </ProjectTab>
          <ProjectTab name='Transactions' />
          <ProjectTab name='Time Activity' />
          <ProjectTab name='Project Reports' />
        </div>

        <div className='Project_main_container_details'>
          <div className='hourly_costs_checkbox'>
            <input type='checkbox' defaultChecked />
            <p style={{ fontSize: "15px" }}>Show hourly costs</p>
            <FontAwesomeIcon icon={faPrint} />
            <FontAwesomeIcon icon={faShareSquare} />
          </div>
          <br />
          <div className='income_cost_profit_container'>
            <ProjectContainer number='$0.00' name='INCOME' sign='minus'>
              <ProjectDetailContainer
                title='INCOME'
                subtitle='Invoices'
                detail='Request money for your product or services.'
              />
            </ProjectContainer>
            <ProjectContainer number='$0.00' name='COSTS' sign='equal'>
              <ProjectDetailContainer
                title='HOURLY TIME COST'
                subtitle='Hours'
                detail='Add time spend on this project.'
              />
              <ProjectDetailContainer
                title='EXPENSE'
                secondTitle="Bills"
                subtitle='Expenses'
                detail="Track what you've spent on this project."
                seconddetail="Add anything you purchase from vendors"
              />
            </ProjectContainer>
            <ProjectContainer number='$0.00' name='PROFIT'>
            </ProjectContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMainContainer;
