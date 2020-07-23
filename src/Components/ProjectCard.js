import React from "react";
import {
  Card,
  Header,
  Divider,
  Button,
  Icon,
  Label,
  Progress,
} from "semantic-ui-react";
import { cardOptions } from "../Data/StylesOptions";

const ProjectCard = ({ project }) => {
  return (
    <Card style={cardOptions}>
      <Card.Content>
        <Header
          as="h1"
          id="fonts"
          textAlign="center"
          style={{ fontWeight: 500 }}
        >
          {project.name}
        </Header>
        <Card.Description id="fonts">{project.description}</Card.Description>
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
            const [language, percentage] = Object.entries(languageData)[0];
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
  );
};

export default ProjectCard;
