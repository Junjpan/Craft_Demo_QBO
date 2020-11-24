import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import SidebarCopy from "../sidebar/SidebarCopy";
import Navbar from "./../navbar/Navbar";
import DataImage from "./dataImage/DataImage";
import Info from "./info/Info";
import Tips from "./tips/Tips";
import AddProjectContainer from "./addProject/AddProjectContainer";

const Projects = () => {
  const [sidebarWindow, setSidebarWindow] = useState(true);
  const [newPropjectWindow, setNewProjectWindow] = useState(false);

  const toggleSidebar = () => {
    setSidebarWindow((prev) => !prev);
  };

  const openWindow = () => {
    setNewProjectWindow((prev) => !prev);
  };

  return (
    <main>
      {sidebarWindow && <Sidebar />}
      {!sidebarWindow && <SidebarCopy toggleSidebar={toggleSidebar} />}
      <Navbar onClick={toggleSidebar} sidebar={sidebarWindow} />
      <div
        className={
          sidebarWindow ? "projects_dashboard" : "projects_dashboard_hidden"
        }
      >
        <div className='mainContent'>
          <Info openWindow={openWindow} />
          <DataImage />{" "}
        </div>
        <Tips />
      </div>
      {newPropjectWindow && <AddProjectContainer openWindow={openWindow} />}
    </main>
  );
};

export default Projects;
