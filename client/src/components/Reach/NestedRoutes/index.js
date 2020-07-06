import React from "react";
import { Router, Link } from "@reach/router";

import Home from "./Home";
import About from "./About";
import Support from "./Support";
import Dash from "./Dash";
import DashHome from "./DashHome";
import Invoices from "./Invoices";
import Team from "./Team";

const style = {
  width: "80%",
  border: "solid 1px",
  overflow: "auto",
};

const NestedRoutes = () => {
  return (
    <div style={style}>
      <nav>
        <div>nav</div>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="support">Support</Link>
        <Link to="dash">Dash</Link>
        <Link to="dashboard">Dashboard</Link>
        <Link to="invoices">Invoices</Link>
        <Link to="team">Team</Link>
      </nav>
      <h1>Nested Routes</h1>
      <Router>
        <Home path="home">
          <About path="about" />
          <Support path="support" />
          <Dash path="dashboard">
            <DashHome path="dashboard" />
            <Invoices path="invoices" />
            <Team path="team" />
          </Dash>
        </Home>
      </Router>
    </div>
  );
};

export default NestedRoutes;
