import React, { useEffect } from "react";
import getRepos from "../Data/FetchRepos";

const Projects = () => {
  useEffect(() => {
    getRepos();
  }, []);

  return <div>Projects</div>;
};

export default Projects;
