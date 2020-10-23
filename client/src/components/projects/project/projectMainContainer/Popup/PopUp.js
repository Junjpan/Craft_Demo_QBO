import React from "react";
import "./popup.scss";

const PopUp = () => {
  return (
    <div>
      <div className='triangle'></div>
      <div className='popup'>
        <div className='popup_title'>
          <h4>Your Project at a glance</h4>
          <button className='popup_close_button'>X</button>
        </div>
        <div style={{color:"gray", fontSize:"14px"}}>
            See your project's performance end to end. Track income and all your
            costs, including labor
        </div>
        <div className='popup_footer'>
            <p>1 of 5</p>
            <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
