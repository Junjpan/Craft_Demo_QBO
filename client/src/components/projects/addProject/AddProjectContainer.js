import React, { useRef, useState, useEffect } from "react";
import BackDrop from "../../../resuable_components/menuItem/backDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import AddCustomer from './addCustomers/AddCustomer';

const AddProjectContainer = ({ openWindow }) => {
  const projectNameRef = useRef(null);
  const [customers, setCustomers] = useState("");
  const [name, setName] = useState("");
  const [disable, setDisable] = useState(true);
  const [nameAlert, setNameAlert] = useState(false);
  const [customerAlert, setCustomersAlert] = useState(false);
  const [customersVisited, setCustomersVistited] = useState(false);
  const [visited, setVisited] = useState(false);
  const [newListWindow, setNewListWindow] = useState(false);

  const customers_array = [
    { id: 1, name: "Amy's Bird Sanctuary" },
    { id: 2, name: "Bill's Windsurf Shop" },
    { id: 3, name: "Cool Cars" },
    { id: 4, name: "Diego Rodriguez" },
    { id: 5, name: "Dukes Basketball Camp" },
    { id: 6, name: "Dylan Sollfrank" },
  ];

  const sortArray = customers_array.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    projectNameRef.current.focus();
  }, []);

  useEffect(() => {
    if (visited && name.length === 0) {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }
  }, [visited, name]);

  //control customers list window
  useEffect(() => {
    if (customers === "add") {
      setNewListWindow(true);
    }else{
      setNewListWindow(false);
    }
  }, [customers]);

  useEffect(() => {
    if (customers === "add") {
      setCustomersAlert(true);
    } else if (customersVisited && customers.length === 0) {
      setCustomersAlert(true);
    } else {
      setCustomersAlert(false);
    }
  }, [customersVisited, customers]);

  useEffect(() => {
    if (customers.length >= 1 && name.length >= 1) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [customers, name]);

  return (
    <div>
      <BackDrop />
      <div className='add_project_container'>
        <div className='form_header'>
          <p>New Project</p>
          <FontAwesomeIcon
            icon={faTimes}
            className='close_button'
            onClick={openWindow}
          />
        </div>
        <form className='new_project_form'>
          <label htmlFor='name' className={nameAlert ? "alert" : ""}>
            {nameAlert && (
              <FontAwesomeIcon
                icon={faExclamationCircle}
                style={{ marginRight: "10px" }}
              />
            )}
            Project name *
            <br />
            <input
              type='text'
              id='name'
              placeholder=" What's the project?"
              ref={projectNameRef}
              onChange={(e) => setName(e.target.value)}
              onClick={() => setVisited(true)}
              className={nameAlert ? "borderalert" : ""}
              required
            />
          </label>

          <div>
            <label htmlFor='customers' className={customerAlert ? "alert" : ""}>
              {customerAlert && (
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  style={{ marginRight: "10px" }}
                />
              )}
              Customers *
              <br />
              <select
                id='customers'
                required
                className={customerAlert ? "borderalert" : "customers_List"}
                onClick={() => setCustomersVistited(true)}
                onChange={(e) => setCustomers(e.target.value)}
              >
                <option value='' disabled selected hidden>
                  {"  "}Who's the project for?
                </option>
                <option value='add'>+ Add new</option>
                {sortArray.map((customer) => {
                  return (
                    <option key={customer.id} value={customer.name}>
                      {customer.name}
                    </option>
                  );
                })}
              </select>
            </label>

            {newListWindow && <AddCustomer />}
          </div>

          <label htmlFor='notes'>
            Notes
            <br />
            <textarea
              id='notes'
              placeholder=' Add details you want to remember.'
              rows='7'
            />
          </label>

          <button className='savebutton' disabled={disable}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

AddProjectContainer.propTypes = {
  openWindow: PropTypes.func.isRequired,
};

export default AddProjectContainer;
