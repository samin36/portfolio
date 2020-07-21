import React from "react";
import { Responsive } from "semantic-ui-react";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Intro from "./Intro";
import { Switch, Route } from "react-router-dom";

const RouterSetup = () => {
  return (
    <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <NavBarDesktop />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Responsive>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <NavBarMobile />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Intro {...props} mobile />}
          />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Responsive>
    </>
  );
};

export default RouterSetup;
