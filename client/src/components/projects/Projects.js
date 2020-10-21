import React, { Fragment, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "./../navbar/Navbar";
import DataImage from './dataImage/DataImage';
import Info from './info/Info';

const Projects = () => {
  const [sidebarWindow, setSidebarWindow] = useState(true);

  const toggleSidebar = () => {
    setSidebarWindow((prev) => !prev);
  };

  return (
    <Fragment>
      {sidebarWindow && <Sidebar />}
      <Navbar onClick={toggleSidebar} sidebar={sidebarWindow} />
      <div
        className={
          sidebarWindow ? "projects_dashboard" : "projects_dashboard_hidden"
        }
      >
        <div className="mainContent">
          <Info />
          <DataImage />{" "}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
