import React from "react";
import "./detail.scss";

export const Details = () => {
  return (
    <React.Fragment>
    <div className='details_container'>
      <div className='bar_title'>
        <p>--</p>
        <p>PROFIT MARGIN</p>
      </div>
      <div className='bar_details'>
        <div className='sub_bar_title'>
          <p>income</p>
          <p>Costs</p>
        </div>
        <div className='bar_container'>
          <p className='bar'></p>
          <p className='bar'></p>
        </div>
        <div className='number'>
          <p>$0.00</p>
          <p>$0.00</p>
        </div>
      </div>
      <div className="status_container">
        <span className="status">Open</span>
        <span>$0.00</span>
        <span className="status">Overdue</span>
        <span>0.00</span>
      </div>
    </div>
    <span className="prject_tour_link">Take project tour</span>
    </React.Fragment>
  );
};

export default Details;
