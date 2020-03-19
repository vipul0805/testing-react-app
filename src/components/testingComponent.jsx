import React, { Component } from "react";
import axios from "axios";

export default class Postform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submithandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post(`http://localhost:8034/checkcreds`, {
      username: this.state.fname,
      password: this.state.lname
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.submithandler}>
          <div>
            <input
              id="qw"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="lname"
              value={this.state.password}
              onChange={this.changeHandler}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
