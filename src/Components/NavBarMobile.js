import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

const NavBarMobile = () => {
  return (
    <Menu
      secondary
      style={{
        background: "none",
        padding: "0em",
        margin: "0em",
      }}
      inverted
      id="fonts"
    >
      <Menu.Item
        id="fonts"
        header
        as={NavLink}
        to="/"
        style={{
          fontSize: "1.25em",
          fontWeight: 500,
          background: "none",
        }}
      >
        &lt;Shrey /&gt;
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item icon="sidebar">
          <Dropdown.Menu id="fonts">
            <Dropdown.Item as={NavLink} to="/aboutme">
              About Me
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/projects">
              Projects
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/contact">
              Contact
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(NavBarMobile);
