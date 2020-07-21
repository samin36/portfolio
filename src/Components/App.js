import React from "react";
import RouterSetup from "./RouterSetup";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          margin: "0",
        }}
        className="nav-bar"
        id="fonts"
      >
        <RouterSetup />
      </div>
    </Router>
  );
};

export default App;
