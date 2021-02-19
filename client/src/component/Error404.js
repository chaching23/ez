import React, { Component } from "react";

class Error404 extends Component {
  state = {};
  render() {
    return (
      <div
        className="jumbotron"
        style={{
          color: "rebeccapurple",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "7.5rem" }}>404</h1>
        <h2>Page Not Found</h2>
      </div>
    );
  }
}

export default Error404;
