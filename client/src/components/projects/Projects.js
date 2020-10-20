import React, { Fragment,useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from './../navbar/Navbar';

const Projects = () => {
 const [sidebarWindow,setSidebarWindow]=useState(true);

 const toggleSidebar=()=>{
  setSidebarWindow((prev)=>!prev)
 }

  return (
    <Fragment>
      {sidebarWindow&&<Sidebar sidebar={sidebarWindow}/>}
      <Navbar  onClick={toggleSidebar} sidebar={sidebarWindow}/>
      <div className={sidebarWindow?'projects_dashboard':'projects_dashboard_hidden'}>Project</div>
    </Fragment>
  );
};

export default Projects;
