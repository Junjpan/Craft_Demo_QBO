import React, { useState, useEffect } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import SubNavbar from "./subNavbar/SubNavbar";
import Details from "./Details/Details";
import ProjectMainContainer from "./projectMainContainer/ProjectMainContainer";
import SidebarCopy from "./../../sidebar/SidebarCopy";

const Project = (props) => {
  const [sidebarWindow, setSidebarWindow] = useState(true);
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    const projectId = props.match.params.id;
    const projects = JSON.parse(localStorage.getItem("projects"));
    if (projects === null) {
      window.location.href = "/app/projects";
    }
    const project = projects.filter((project) => project.id === projectId);
    setProjectData(...project);
  }, [props.match.params.id]);

  const toggleSidebar = () => {
    setSidebarWindow((prev) => !prev);
  };

  return (
    <main>
      {sidebarWindow && <Sidebar />}
      {!sidebarWindow && <SidebarCopy toggleSidebar={toggleSidebar}/>}
      <Navbar onClick={toggleSidebar} sidebar={sidebarWindow} />
      <div
        className={
          sidebarWindow ? "projects_dashboard" : "projects_dashboard_hidden"
        }
      >
        <div className='mainContent'>
          <div className='all_projects'>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              style={{ marginRight: "10px" }}
            />
            <span>
              <Link to='/app/projects'>All projects</Link>
            </span>
            <p>{projectData.name}</p>
            <SubNavbar data={projectData} />
            <Details />
            <ProjectMainContainer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
