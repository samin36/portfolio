import React, { useEffect, useState } from "react";
import { Dimmer, Loader, Card } from "semantic-ui-react";
import getRepos from "../Data/FetchRepos";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getReposWrapper = async () => {
      setProjects(await getRepos());
    };
    getReposWrapper();
  }, []);

  return (
    <Card.Group
      textAlign="center"
      itemsPerRow={3}
      stackable
      style={{
        margin: "0em",
      }}
      id="fonts"
      centered
    >
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))
      ) : (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      )}
    </Card.Group>
  );
};

export default Projects;
