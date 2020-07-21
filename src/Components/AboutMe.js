import React from "react";
import { Header, Divider, Button, Card, List, Image } from "semantic-ui-react";
import Pdf from "../Data/resume.pdf";
import { coursesTaken, internshipExperience } from "../Data/AboutMeData";
import { cardOptions, listOptions } from "../Data/StylesOptions";

const AboutMe = () => {
  return (
    <Card.Group
      itemsPerRow={3}
      stackable
      style={{
        margin: "0em",
      }}
      id="fonts"
    >
      <Card style={cardOptions}>
        <Card.Content>
          <Header
            as="h1"
            id="fonts"
            textAlign="center"
            style={{ fontWeight: 500 }}
          >
            A little about me...
          </Header>
          <Divider inverted />
          <Card.Description>
            <List bulleted style={{ padding: "0 .5em" }}>
              <List.Item id="fonts" as="h3" style={listOptions}>
                I was born in India and lived there until the age of 10. In
                2010, I moved to America with my family and have been living in
                Alpharetta, Georgia ever since.
              </List.Item>
              <List.Item id="fonts" as="h3" style={listOptions}>
                I got into programming after I came across a YouTube tutorial
                about making the classic Snake game in Java. I am a visual
                learner and visualizing code in the form of games and
                simulations fueled my drive to learn more.
              </List.Item>
              <List.Item id="fonts" as="h3" style={listOptions}>
                I am currently pursuing a Bachelor's Degree in Computer Science
                from Georgia Institute of Technology. I will be graduating in
                May 2021 with plans to work full time as a Software Engineer and
                pursue Georgia Tech's Online CS Master's Degree.
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Divider inverted />
          <Button
            inverted
            size="large"
            id="font-fam"
            as="a"
            href={Pdf}
            target="_blank"
          >
            Resume
          </Button>
        </Card.Content>
      </Card>
      <Card style={cardOptions}>
        <Card.Content>
          <Header
            as="h1"
            id="fonts"
            textAlign="center"
            style={{ fontWeight: 500 }}
          >
            Education
          </Header>
          <Divider inverted />
          <Card.Description>
            <Header
              as="p"
              id="fonts"
              style={{ padding: "0 .5em", fontWeight: 300 }}
            >
              I have been at Georgia Tech since May 2018 and have taken several
              CS courses. Here are some of the relevant ones:
            </Header>
            <List bulleted style={{ padding: "0 .5em" }}>
              {coursesTaken.map((course, index) => (
                <List.Item key={index} id="fonts" as="h3" style={listOptions}>
                  {course}
                </List.Item>
              ))}
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card style={cardOptions}>
        <Card.Content>
          <Header
            as="h1"
            id="fonts"
            textAlign="center"
            style={{ fontWeight: 500 }}
          >
            Professional Experience
          </Header>
          <Divider inverted />
          <Card.Description>
            {internshipExperience.map((job, jobIndex) => (
              <Card
                style={{
                  backgroundColor: "rgba(0, 77, 144, 0.4)",
                  boxShadow: "0px 2px 4px 1px rgb(0, 97, 164)",
                }}
                centered
                fluid
                key={jobIndex}
              >
                <Card.Content>
                  <Card.Header id="fonts" style={{ fontSize: "2em" }}>
                    <Image floated="right" size={job.logoSize} src={job.logo} />
                    {job.company}
                  </Card.Header>
                  <Card.Meta id="fonts">
                    {job.startDate} - {job.endDate}
                  </Card.Meta>
                  <Card.Description id="fonts">
                    <List bulleted>
                      {job.achievements.map((achievement, achievementIndex) => (
                        <List.Item
                          id="fonts"
                          style={listOptions}
                          key={achievementIndex}
                        >
                          {achievement}
                        </List.Item>
                      ))}
                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default AboutMe;
