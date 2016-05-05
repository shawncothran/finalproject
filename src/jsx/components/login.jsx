import React, { Component } from 'react';
import { Link } from 'react-router';

import User from '../models/user';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  // isLoggedIn() {
  //   if (User.access_token) {
  //     this.props.history.pushState(null, "dashboard");
  //   }
  // }();

  handleLogin(e) {
    const email = this.emailRef.value;
    const password = this.passwordRef.value;

    e.preventDefault();

    if (email && password) {
      User.login({ username: email, password }, (error) => {
        if (!error) {
          this.setState({ email });
          this.props.history.pushState(null, 'dashboard');
        } else {
          alert('Hmmm... I don&#39;t remember that one. Try again');
        }
      });
    } else {
      alert('Hmmm... I don&#39;t remember that one. Try again');
      this.emailRef.value = '';
      this.passwordRef.value = '';
    }
  }

  render() {
    return (
      <form className="userForm" onSubmit={this.handleLogin}>
        <h2>Log in</h2>

        <p>Manage and create your cards!</p>

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
          placeholder="password"
          ref={(password) => {
            this.passwordRef = password;
            return this.passwordRef;
          }}
          required
          type="password"
        />
        <input
          className="button -full"
          required
          type="submit"
          value="login"
        />

        <Link className="anchor" to="register">Not a member? Sign Up</Link>
      </form>
    );
  }
}

Login.propTypes = {
  history: React.PropTypes.object,
};
