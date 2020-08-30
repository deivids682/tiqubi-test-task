import React, { useState } from "react";
import ProjectDetailsContext from "../contexts/ProjectDetailsContext";

const ProjectDetailsProvider = ({ children }) => {
  const setProjectDetails = (projectDetails) => {
    addProjectDetails((prevState) => {
      return {
        ...prevState,
        projectDetails: [...prevState.projectDetails, projectDetails],
      };
    });
  };

  const setProjectTime = (id, time) => {
    addProjectDetails((prevState) => {
      const prewProject = prevState.projectDetails[id];

      let hours = prewProject.time.hours + parseInt(time.hours);
      let minutes = prewProject.time.minutes + parseInt(time.minutes);

      if (minutes > 59) {
        hours += 1;
        minutes -= 60;
      }

      const updatedProject = { ...prewProject, time: { hours, minutes } };

      const updatedProjects = [
        ...prevState.projectDetails.slice(0, id),
        updatedProject,
        ...prevState.projectDetails.slice(id + 1),
      ];
      return {
        ...prevState,
        projectDetails: updatedProjects,
      };
    });
  };

  const projectState = {
    projectDetails: [],
    setProjectDetails,
    setProjectTime,
  };

  const [projectDetails, addProjectDetails] = useState(projectState);

  return (
    <ProjectDetailsContext.Provider value={projectDetails}>
      {children}
    </ProjectDetailsContext.Provider>
  );
};

export default ProjectDetailsProvider;
