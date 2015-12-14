import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import User from '../models/user';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let username = this.refs.username.value;
    let password = this.refs.password.value;

    User.register({username, password}, (results) => {
      User.login({username, password}, () => {
        // we are logged in now...
        // user router to redirect
        this.setState({username: username});
      })
    });
  }

  render() {
    let successMsg;
    if (this.state.username) {
        successMsg = (
        <p>,@D; {this.state.username} I will Remember that
          <Link to="#/login">Continue to Dashboard</Link>
        </p>
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up for Free</h2>
        <p>Make your first card in seconds</p>
        <div id="success">{successMsg}</div>
        <input type="text" ref="username" placeholder="Millie@Snailephant.com"/>
        <input type="password" ref="password" placeholder="secret passcode"/>
        <input type="password" ref="passconfirm" placeholder="wait, what was that?"/>
        <input type="submit" value="sign up"/>
        <Link to="login">Already a member? Login</Link>
      </form>
    )
  }
}

export default Register;
