import React, { useEffect, useState } from "react";
import {
  Card,
  Header,
  Divider,
  Dimmer,
  Loader,
  Button,
  Icon,
  Label,
  Progress,
  Segment,
  Container,
} from "semantic-ui-react";
import getRepos from "../Data/FetchRepos";
import { cardOptions } from "../Data/StylesOptions";

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
          <Card style={cardOptions} key={index}>
            <Card.Content>
              <Header
                as="h1"
                id="fonts"
                textAlign="center"
                style={{ fontWeight: 500 }}
              >
                {project.name}
              </Header>
              <Card.Description id="fonts">
                {project.description}
              </Card.Description>
              <Divider hidden />
              <Button
                as="a"
                labelPosition="right"
                href={project.html_url}
                target="_blank"
                id="font-fam"
              >
                <Button icon color="facebook">
                  <Icon name="github" inverted />
                </Button>
                <Label id="font-fam" pointing="left" color="blue">
                  Repo
                </Label>
              </Button>
              {project.homepage && (
                <Button
                  as="a"
                  labelPosition="right"
                  href={project.homepage}
                  target="_blank"
                  id="font-fam"
                >
                  <Button icon color="google plus">
                    <Icon name="external" inverted />
                  </Button>
                  <Label id="font-fam" pointing="left" color="red">
                    Site
                  </Label>
                </Button>
              )}
              <Divider inverted />
              <Card.Meta id="fonts" style={{ fontWeight: "300" }}>
                {project.languages.map((languageData, languageIndex) => {
                  const [language, percentage] = Object.entries(
                    languageData
                  )[0];
                  return (
                    <div key={languageIndex}>
                      {language}
                      <Progress
                        percent={percentage}
                        inverted
                        indicating
                        size="small"
                        color="green"
                      />
                    </div>
                  );
                })}
              </Card.Meta>
              <Divider inverted />
              <Card.Meta id="fonts" style={{ fontWeight: "300" }}>
                Created on {project.created_at}
              </Card.Meta>
            </Card.Content>
          </Card>
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
