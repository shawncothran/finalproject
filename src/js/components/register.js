import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import User from '../models/user';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let passwordConfirm = this.refs.passconfirm.value;

    if (email && password && password === passwordConfirm) {
      User.register({email, password}, (results) => {
        User.login({username: email, password: password}, () => {
          this.setState({email: email});
        })
      });
    } else {
      alert("Type yo password twice yo and spell it the same both times. Try again, hen.")
      this.refs.email.value = "",
      this.refs.password.value = "",
      this.refs.passconfirm.value = ""
    }
  }
  render() {
    let successMsg;
    if (this.state.email) {
        successMsg = (
        <p>,@D; {this.state.email}, I'll Remember that
          <Link to="#/login">Continue to Dashboard</Link>
        </p>
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up for Free</h2>
        <p>Make your first card in seconds!</p>
        <div id="success">{successMsg}</div>
        <input type="text" ref="email" placeholder="Millie@Snailephant.com" required/>
        <input type="password" ref="password" placeholder="secret passcode" required/>
        <input type="password" ref="passconfirm" placeholder="wait, what was that?" required/>
        <input type="submit" value="sign up"/>
        <Link to="login">Already a member? Login</Link>
      </form>
    )
  }
}

export default Register;
