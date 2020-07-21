import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

const NavBarDesktop = () => {
  return (
    <Menu
      size="large"
      secondary
      style={{
        background: "none",
        padding: "0 1em",
        margin: "0",
      }}
      inverted
      id="fonts"
    >
      <Menu.Item
        id="fonts"
        header
        as={NavLink}
        to="/"
        style={{ fontSize: "1.50em", fontWeight: 500, background: "none" }}
      >
        &lt;Shrey /&gt;
      </Menu.Item>
      <Menu.Menu position="right" style={{ fontSize: "1.30em" }}>
        <Menu.Item as={NavLink} to="/aboutme">
          About Me
        </Menu.Item>
        <Menu.Item as={NavLink} to="/projects">
          Projects
        </Menu.Item>
        <Menu.Item as={NavLink} to="/contact">
          Contact
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(NavBarDesktop);
