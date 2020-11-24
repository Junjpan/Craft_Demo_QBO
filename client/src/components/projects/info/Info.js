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
        />
        See how it works
      </p>
      <div className='info'>
        <b>Profitability in one place</b>
        <p className='sub'>
          Organize your project finances with a clear view of profits
        </p>
        <b>Keep track of your labor costs</b>
        <p className='sub'>
          See where your team is spending time and how it affects your profit
          margins
        </p>
        <b>Eliminate the guesswork</b>
        <p className='sub'>
          Understand which projects make money and where you should focus your
          efforts
        </p>
      </div>
      <div>
        <button
          aria-label='start a project'
          className='start_project_button'
          onClick={props.openWindow}
          onKeyDown={props.openWindow}
          type='button'
        >
          Start a project
        </button>
      </div>
    </div>
  );
};

Info.propTypes = {
  openWindow: PropTypes.func.isRequired,
};

export default Info;
