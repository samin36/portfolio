import React, { useState } from "react";
import { cardOptions } from "../Data/StylesOptions";
import {
  Card,
  Divider,
  Header,
  Icon,
  Label,
  Form,
  Container,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import axios from "axios";

const initialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formDetails, setFormDetails] = useState(initialDetails);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e, { name, value }) => {
    setFormDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = () => {
    setIsSending(true);
    axios
      .post("/api/sendemail", formDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSending(false);
      });

    setFormDetails(initialDetails);
  };

  return (
    <Container text style={{ marginTop: "2em" }}>
      <Dimmer active={isSending}>
        <Loader>Sending</Loader>
      </Dimmer>
      <Card style={cardOptions} centered fluid>
        <Card.Content>
          <Header as="h3" icon textAlign="center">
            <a href="mailto:shreyamin75@gmail.com" id="fonts">
              <Icon name="mail" />
              shreyamin75@gmail.com
            </a>
          </Header>
          <Header as="h3" icon textAlign="center">
            <a href="tel:404-666-7114" id="fonts">
              <Icon name="phone" />
              404-666-7114
            </a>
          </Header>
          <Divider
            inverted
            clearing
            horizontal
            style={{ marginBottom: "-1em" }}
          >
            <Label circular content="Or" size="large" color="red" id="fonts" />
          </Divider>
        </Card.Content>
        <Card.Content>
          <Form inverted id="fonts" onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                id="fonts"
                name="firstName"
                fluid
                placeholder="First Name"
                required
                onChange={handleChange}
                value={formDetails.firstName}
              />
              <Form.Input
                id="fonts"
                name="lastName"
                fluid
                placeholder="Last Name"
                required
                onChange={handleChange}
                value={formDetails.lastName}
              />
            </Form.Group>
            <Form.Input
              id="fonts"
              name="email"
              fluid
              placeholder="Email"
              required
              onChange={handleChange}
              value={formDetails.email}
            />
            <Form.TextArea
              id="fonts"
              name="message"
              placeholder="Message"
              required
              onChange={handleChange}
              value={formDetails.message}
            />
            <Form.Button fluid id="fonts" color="blue">
              Send
            </Form.Button>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Contact;
