import React from "react";
import {
  Grid,
  Header,
  Container,
  Divider,
  Button,
  Card,
} from "semantic-ui-react";
import Pdf from "../Data/resume.pdf";

const AboutMe = () => {
  return (
    <Grid
      columns="equal"
      celled="internally"
      stackable
      inverted
      centered
      style={{
        marginTop: "4em",
        backgroundColor: "rgba(0, 6, 42, 0.5)",
        borderRadius: "0.5em",
      }}
    >
      <Grid.Column>
        <Header
          as="h1"
          id="fonts"
          textAlign="center"
          style={{ fontWeight: 500 }}
        >
          A little about me...
        </Header>
        <Divider inverted />
        <Header
          as="p"
          id="fonts"
          style={{ padding: "0 .5em", fontWeight: 300 }}
        >
          I am currently pursuing a Bachelor's Degree in Computer Science from
          Georgia Institute of Technology. I will be graduating in May 2021 with
          plans to work full time as a Software Engineer and pursuing Online CS
          Master's Degree.
        </Header>
        <Container textAlign="center">
          <Button
            inverted
            size="large"
            id="font-fam"
            as="a"
            href={Pdf}
            target="_blank"
            icon
          >
            Resume
          </Button>
        </Container>
      </Grid.Column>
      <Grid.Column>
        <Header
          as="h1"
          id="fonts"
          textAlign="center"
          style={{ fontWeight: 500 }}
        >
          Education
        </Header>
        <Divider inverted />
        <Header
          as="p"
          id="fonts"
          style={{ padding: "0 .5em", fontWeight: 300 }}
        >
          I have been at Georgia Tech since May 2018 and have taken several CS
          courses. Here are some of the relevant ones:
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header
          as="h1"
          id="fonts"
          textAlign="center"
          style={{ fontWeight: 500 }}
        >
          Professional Experience
        </Header>
        <Divider inverted />
        <Header
          as="p"
          id="fonts"
          style={{ padding: "0 .5em", fontWeight: 300 }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default AboutMe;
