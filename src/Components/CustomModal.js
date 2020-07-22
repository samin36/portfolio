import React from "react";
import { Modal, Icon, Header } from "semantic-ui-react";

const CustomModal = ({ isError, message, handleOnClose }) => {
  return (
    <Modal open onClose={handleOnClose}>
      <Modal.Header>
        <Header
          as="h1"
          content={isError ? "An Error Occurred" : "Success"}
          textAlign="center"
        />
      </Modal.Header>
      <Modal.Content>
        <Header as="p" textAlign="center" icon>
          <Icon
            name={isError ? "x" : "check"}
            size="massive"
            circular
            color={isError ? "red" : "green"}
            inverted
          />
          {message}
        </Header>
      </Modal.Content>
    </Modal>
  );
};

export default CustomModal;
