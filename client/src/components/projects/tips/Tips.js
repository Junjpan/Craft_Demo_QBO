import React from "react";

const Tips = () => {
  return (
    <div className='tips'>
      <h4>TIPS & RESOURCES</h4>
      <ul>
        <li>
          <a href='https://quickbooks.intuit.com/community/Help-Articles/Track-income-costs-and-profitability-by-project/m-p/249111'>
            Track income, costs, and profitability by project
          </a>
        </li>
        <li>
          <a href='https://quickbooks.intuit.com/community/Help-Articles/Get-your-project-labor-costs-in-real-time/m-p/249136'>
            Get your project labor costs in real-time
          </a>
        </li>
        <li>
          <a href='https://quickbooks.intuit.com/community/Help-Articles/What-are-pay-rates-cost-rates-and-billable-rates/m-p/249137'>
            What are pay rates, cost rates, and billable rates?
          </a>
        </li>
        <li className="seemore">
          See more
        </li>
      </ul>
    </div>
  );
};

export default Tips;
