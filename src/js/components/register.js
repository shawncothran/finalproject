import React from 'react';
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
      alert("Type password identically both times. Try again!")

      this.refs.email.value = "";
      this.refs.password.value = "";
      this.refs.passconfirm.value = "";
    }
  }

  render() {
    let successMsg;

    if (this.state.email) {
      successMsg = (
        <p className="registerSuccess">{this.state.email}, I'll Remember that
          <Link className="anchor" to="dashboard">Continue to the Dashboard to create your first card!</Link>
        </p>
      )
    }

    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <h2>Sign Up for Free</h2>

        <p>Make your first card in seconds!</p>

        <div id="success">{successMsg}</div>

        <input className="-full" type="text" ref="email" placeholder="Millie@Snailephant.com" autofocus required/>
        <input className="-full" type="password" ref="password" placeholder="secret passcode" required/>
        <input className="-full" type="password" ref="passconfirm" placeholder="wait, what was that?" required/>
        <input className="button -full" type="submit" value="sign up"/>

        <Link className="anchor" to="login">Already a member? Login</Link>
      </form>
    )
  }
}

export default Register;
