import React, { useState, useRef, useEffect } from "react";
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"


const AddCustomer = ({addCustomer}) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const newNameRef = useRef(null);

  useEffect(() => {
    newNameRef.current.focus();
  }, []);

  useEffect(()=>{
   if(name.length>=1){
       setError(false)
   }
  },[name])

  const saveNewCustomers = () => {
    if (name.length === 0) {
        setError(true)
    }else{
      addCustomer(name)
    }

  };

  return (
    <div className='new_list_window'>
      <h3>New Customer</h3>
      <label htmlFor='newName' className={error ? "alert" : ""}>
        <span style={{ color: "red" }}>*</span>Name
        <br />
        <input
          id='newName'
          type='text'
          value={name}
          ref={newNameRef}
          onChange={(e) => setName(e.target.value)}
          className={error ? "borderalert" : ""}
        />
      </label>
      <div className='new_list_window_footer'>
        <span>+ Details</span>
        <button type='button' onClick={saveNewCustomers}>
          Save
        </button>
      </div>
      <div className="or">
          <span>OR</span>
          <p className="maybeLater"><FontAwesomeIcon icon={faCaretDown} style={{marginRight:"12px"}}/>Maybe later</p>
          <button className="gmail_button">Connect your Gmail account</button>
          <p className="list_info">After you connect, your contacts will appear in a holding list.</p>
          <p className="list_info">You can then choose which ones to add to QuickBooks</p>
      </div>
    </div>
  );
};

AddCustomer.propTypes={
  addCustomer:PropTypes.func.isRequired
}

export default AddCustomer;
