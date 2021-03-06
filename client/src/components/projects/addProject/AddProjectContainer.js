import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import AddCustomer from "./addCustomers/AddCustomer";
import { v4 as uuidv4 } from 'uuid';
import BackDrop from '../../../resuable_components/backDrop/BackDrop';

const AddProjectContainer = ({ openWindow }) => {
  const customers_array = [
    { id: 1, name: "Amy's Bird Sanctuary" },
    { id: 2, name: "Bill's Windsurf Shop" },
    { id: 3, name: "Cool Cars" },
    { id: 4, name: "Diego Rodriguez" },
    { id: 5, name: "Dukes Basketball Camp" },
    { id: 6, name: "Dylan Sollfrank" },
  ];
  const projectNameRef = useRef(null);
  const [customers, setCustomers] = useState("");
  const [name, setName] = useState("");
  const [note,setNote]=useState('');
  const [customersList, setCustomersList] = useState(customers_array);
  const [disable, setDisable] = useState(true);
  const [nameAlert, setNameAlert] = useState(false);
  const [customerAlert, setCustomersAlert] = useState(false);
  const [customersVisited, setCustomersVistited] = useState(false);
  const [visited, setVisited] = useState(false);
  const [newListWindow, setNewListWindow] = useState(false);

  const sortCustomersList = (array) => {
    return array.sort((a, b) => a.name.localeCompare(b.name));
  };

  useEffect(() => {
    projectNameRef.current.focus();
    const items=localStorage.getItem('list');
    if(items){
      setCustomersList(JSON.parse(items))
    }else{
      localStorage.setItem('list',JSON.stringify(customers_array))
    }
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
    } else {
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


  const addCustomer = async (newCustomer) => {
    const items=JSON.parse(localStorage.getItem('list'));
    const updateItems=[...items,{ id: items.length + 1, name: newCustomer }];
    localStorage.setItem('list',JSON.stringify(updateItems))
    setCustomersList(updateItems);
    await setNewListWindow(false);
    await setCustomers(newCustomer)
    document.getElementById('customers').value=newCustomer
    
  };

  const checkClickOnSelect=(e)=>{
    setCustomersVistited(true);
  }

  const saveNewProject=(e)=>{
    e.preventDefault();
    const newProject={id:uuidv4(),name,note,customer:customers}
    const projects=JSON.parse(localStorage.getItem('projects'));
    if(projects){
      const updatedProjects=[...projects,newProject];
      localStorage.setItem('projects',JSON.stringify(updatedProjects))
    }else{
      localStorage.setItem('projects',JSON.stringify([newProject]))
    }
    window.location.href=`/app/projects/projectdetais/${newProject.id}`
  }

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
                onClick={checkClickOnSelect}
                onChange={(e) => setCustomers(e.target.value)}
              >
                <option value='' disabled selected hidden>
                  {"  "}Who's the project for?
                </option>
                <option value='add'>+ Add new</option>
                {sortCustomersList(customersList).map((customer) => {
                  return (
                    <option key={customer.id} value={customer.name}>
                      {customer.name}
                    </option>
                  );
                })}
              </select>
            </label>

            {newListWindow && <AddCustomer addCustomer={addCustomer} />}
          </div>

          <label htmlFor='notes'>
            Notes
            <br />
            <textarea
              id='notes'
              placeholder=' Add details you want to remember.'
              rows='7'
              onChange={(e)=>setNote(e.target.value)}
            />
          </label>

          <button className='savebutton' disabled={disable} onClick={saveNewProject}>
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
