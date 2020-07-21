import React from "react";
import {
  Container,
  Header,
  Image,
  Icon,
  Divider,
  Item,
} from "semantic-ui-react";
import Typist from "react-typist";

const Intro = ({ mobile }) => {
  return (
    <Container text textAlign="center" fluid>
      <Image
        centered
        src="/images/profile_pic.png"
        size={mobile ? "small" : "medium"}
        style={{ marginTop: "4em" }}
      />
      <Header
        as="h1"
        id="fonts"
        style={{
          fontWeight: "500",
          fontSize: mobile ? "2em" : "2.5em",
          backgroundColor: "rgba(0, 6, 42, 0.5)",
          marginTop: "1em",
          borderRadius: "0.5em",
        }}
        textAlign="center"
      >
        <Typist
          cursor={{
            show: false,
          }}
        >
          <span role="img" aria-label="hello emoji">
            👋Hello!
          </span>
          <Typist.Backspace count={6} delay={1000} />
          <span role="img" aria-label="hello emoji">
            Shrey Amin
          </span>
          <br />
          <Typist.Delay ms={300} />
          <span
            id="fonts"
            style={{ fontSize: mobile ? "0.45em" : "0.6em" }}
            role="img"
            aria-label="bee emoji"
          >
            3rd Year CS Major at Georgia Tech🐝
          </span>
          <Divider fitted />
          <Typist.Delay ms={500} />
          <span
            id="fonts"
            style={{ fontSize: mobile ? "0.36em" : "0.48em", fontWeight: 400 }}
          >
            Java | Python | C | Processing | React | Node
          </span>
          <br />
          <Typist.Delay ms={200} />
          <Item as="a" href="https://github.com/samin36" target="_blank">
            <Icon
              name="github"
              circular
              style={{ color: "white" }}
              size="small"
            />
          </Item>
          <span style={{ fontSize: "0" }}>Github</span>
          <Item as="a" href="https://linkedin.com/in/samin36" target="_blank">
            <Icon
              name="linkedin"
              circular
              style={{ color: "white" }}
              size="small"
            />
          </Item>
          <span style={{ fontSize: "0" }}>Linkedin Placeholder</span>
        </Typist>
      </Header>
    </Container>
  );
};

export default Intro;
