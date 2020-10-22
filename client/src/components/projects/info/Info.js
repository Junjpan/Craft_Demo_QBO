import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Info = (props) => {

  return (
    <div className='info_Container'>
      <h1>Run your projects with confidence</h1>
      <p>Make better decisions by knowing how your jobs are doing</p>
      <p className='info_link'>
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          style={{ marginRight: "5px" }}
          s
        />
        See how it works
      </p>
      <ul>
        <li>Profitability in one place</li>
        <p className='sub'>
          Organize your project finances with a clear view of profits
        </p>
        <li>Keep track of your labor costs</li>
        <p className='sub'>
          See where your team is spending time and how it affects your profit
          margins
        </p>
        <li>Eliminate the guesswork</li>
        <p className='sub'>
          Understand which projects make money and where you should focus your
          efforts
        </p>
      </ul>
      <div>
        <button className='start_project_button' onClick={props.openWindow} >Start a project</button>
      </div>
    </div>
  );
};

Info.propTypes={
  openWindow:PropTypes.func.isRequired
}

export default Info;
