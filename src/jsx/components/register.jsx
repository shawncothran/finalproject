import React, { Component } from 'react';
import { Link } from 'react-router';

import User from '../models/user';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.emailRef.value;
    const password = this.passwordRef.value;
    const passwordConfirm = this.passconfirmRef.value;

    if (email && password && password === passwordConfirm) {
      User.register({ email, password }, () => {
        User.login({ username: email, password }, () => {
          this.setState({ email });
        });
      });
    } else {
      alert('Type password identically both times. Try again!');

      this.emailRef.value = '';
      this.passwordRef.value = '';
      this.passconfirmRef.value = '';
    }
  }

  render() {
    let successMsg;

    if (this.state.email) {
      successMsg = (
        <p className="registerSuccess">{this.state.email}, I&#39;ll Remember that
          <Link
            className="anchor"
            to="dashboard"
          >
            Continue to the Dashboard to create your first card!
          </Link>
        </p>
      );
    }

    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <h2>Sign Up for Free</h2>

        <p>Make your first card in seconds!</p>

        <div id="success">{successMsg}</div>

        <input
          autoFocus
          className="-full"
          placeholder="Millie@Snailephant.com"
          ref={(email) => {
            this.emailRef = email;
            return this.emailRef;
          }}
          required
          type="text"
        />
        <input
          className="-full"
          placeholder="secret passcode"
          ref={(password) => {
            this.passwordRef = password;
            return this.passwordRef;
          }}
          required
          type="password"
        />
        <input
          className="-full"
          placeholder="wait, what was that?"
          ref={(passconfirm) => {
            this.passconfirmRef = passconfirm;
            return this.passconfirmRef;
          }}
          required
          type="password"
        />
        <input
          className="button -full"
          type="submit"
          value="sign up"
        />

        <Link className="anchor" to="login">Already a member? Login</Link>
      </form>
    );
  }
}
