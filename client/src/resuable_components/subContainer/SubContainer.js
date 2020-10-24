import React from "react";

const SubContainer = (props) => {
  return (
    <div>
      <div>
        <div className='subcontainer_top'>
          <p className='number'>{props.number}</p>
          <p className='subcontainer_name'>{props.name}</p>
        </div>
        <div className="sign">{props.sign}</div>
      </div>

      <section>{props.children}</section>
    </div>
  );
};

export default SubContainer;
