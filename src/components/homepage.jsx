import React, { Component } from "react";

export class Homepage extends Component {
  close() {
    this.props.closeSession();
  }

  render() {
    <button onClick={_ => this.props.closeSession()}>Logout</button>;
    return <h1>Welcome {this.props.username}</h1>;
  }
}
