import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Bills from "../../assets/bills.png";
import Expenses from "../../assets/expenses.png";
import Hours from "../../assets/hours.png";
import Invoices from "../../assets/invoices.png";
import "./projectDetailContainer.scss";

export const ProjectDetailContainer = (props) => {
  const [open, setOpen] = useState(true);

  const renderImage = (subtitle) => {
    switch (subtitle) {
      case "Invoices":
        return (
          <div className='side_image'>
            <img src={Invoices} alt={subtitle} />
          </div>
        );
      case "Hours":
        return (
          <div className='side_image'>
            <img src={Hours} alt={subtitle} />
          </div>
        );
      case "Expenses":
        return (
          <div className='side_image'>
            <img src={Expenses} alt={subtitle} />
          </div>
        );
      case "Bills":
        return (
          <div className='side_image'>
            <img src={Bills} alt={subtitle} />
          </div>
        );
      default:
        return(<div className='side_image'></div>)  
    }
  };
  return (
    <div className='project_detail_container'>
      <header onClick={() => setOpen((prev) => !prev)}>
        <span>
          {open ? (
            <FontAwesomeIcon icon={faCaretDown} style={{ color: "black" }} />
          ) : (
            <FontAwesomeIcon icon={faCaretRight} style={{ color: "black" }} />
          )}
        </span>
        <span>{props.title}</span>
      </header>
      {open && (
        <div style={{ border: "1px solid lightgray", padding: "10px" }}>
          <div className='project_detail_inner_container'>
            {renderImage(props.subtitle)}
            <div style={{ textAlign: "left" }}>
              <p style={{ fontWeight: "bold", marginBottom: "0" }}>
                {props.subtitle}
              </p>
              <p style={{ fontSize: "14px" }}>{props.detail}</p>
            </div>
          </div>
          {props.secondTitle && (
            <div className='project_detail_inner_container' style={{marginTop:"0.5rem"}}>
              {renderImage(props.secondTitle)}
              <div style={{ textAlign: "left" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0" }}>
                  {props.secondTitle}
                </p>
                <p style={{ fontSize: "14px" }}>{props.seconddetail}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ProjectDetailContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default ProjectDetailContainer;
