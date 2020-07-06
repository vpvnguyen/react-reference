import React from "react";
import { Router, Link } from "@reach/router";

const style = {
  border: "solid 1px",
};

const BasicReachRouter = () => {
  return (
    <>
      {/* jsx markup */}
      <div style={style}>
        <h1>Basic</h1>
        <div>
          <Link to="home">Home</Link>
        </div>
        <div>
          <Link to="dashboard">Dashboard</Link>
        </div>
      </div>

      {/* set routing */}
      <Router>
        <Home path="home" />
        <Dash path="dashboard" />
      </Router>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h2 style={style}>Home</h2>
    </>
  );
};

const Dash = () => {
  return (
    <>
      <h2 style={style}>Dashboard</h2>
    </>
  );
};

export default BasicReachRouter;
