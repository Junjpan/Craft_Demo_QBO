import React, { useState, useEffect } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
  const [sidebarWindow, setSidebarWindow] = useState(true);
  const [projectData, setProjectData] = useState({});
  const projectId = props.match.params.id;

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    if (projects === null) {
      window.location.href = "/app/projects";
    }
    const project = projects.filter((project) => project.id === projectId);
    setProjectData(...project);
  });

  const toggleSidebar = () => {
    setSidebarWindow((prev) => !prev);
  };

  return (
    <div>
      {sidebarWindow && <Sidebar />}
      <Navbar onClick={toggleSidebar} sidebar={sidebarWindow} />
      <div
        className={
          sidebarWindow ? "projects_dashboard" : "projects_dashboard_hidden"
        }
      >
        <div className='mainContent'>
          <p className='all_projects'>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              style={{ marginRight: "10px" }}
            />
            <span>All projects</span>
            <h4>{projectData.name}</h4>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Project;
