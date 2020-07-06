import React from "react";
import { Router, Link } from "@reach/router";

const style = {
  width: "80%",
  border: "solid 1px",
  overflow: "auto",
};

const UrlParams = ({ children }) => {
  return (
    <div style={style}>
      <nav>
        <div>nav</div>
        <Link to="users-page">Users Page</Link> |{" "}
        <Link to="users/123">Bob</Link> | <Link to="users/abc">Sally</Link>
      </nav>
      <h1>Url Params</h1>
      <div>{children}</div>

      <Router>
        <UsersPage path="users-page" />
        <User path="users/:userId" />
      </Router>
    </div>
  );
};

const User = (props) => {
  return (
    <div style={style}>
      <h1>User</h1>
      {console.log(props)}
      <div>props.location: {JSON.stringify(props.location)}</div>
      <div>props.path: {props.path}</div>
      <div>props.uri: {props.uri}</div>
      <div>props.userId: {props.userId}</div>
    </div>
  );
};

const UsersPage = (props) => {
  return (
    <div style={style}>
      <h1>Users Page</h1>
      <div>props: {JSON.stringify(props)}</div>
    </div>
  );
};

export default UrlParams;
