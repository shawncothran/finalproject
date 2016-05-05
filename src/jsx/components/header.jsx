import React, { Component } from 'react';
import { Link } from 'react-router';

import User from '../models/user';

export default class Header extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem('header'));
    let email;
    let homeStatus;
    let loginStatus;
    let userStatus;

    if (user) {
      email = user.email;
    }

    if (!User.access_token) {
      homeStatus = (
        <Link
          className="logo"
          to="/"
        >
          <img
            alt="snailephant logo"
            className="logoImg"
            src="https://s3.amazonaws.com/snailephant/snailephant-logo.svg"
            title="snailephant"
          />
        </Link>
      );
      loginStatus = <Link className="anchor" to="login">Login</Link>;
      userStatus = <Link className="anchor" to="register">Register</Link>;
    } else {
      homeStatus = (
        <Link className="logo" to="dashboard">
          <img
            alt="snailephant logo"
            className="logoImg"
            src="https://s3.amazonaws.com/snailephant/snailephant-logo.svg"
            title="snailephant"
          />
        </Link>
      );
      loginStatus = <Link className="anchor" to="subscription">{ email }</Link>;
      userStatus = (
        <Link
          className="anchor"
          to="/"
          onClick={() => {
            User.logout();
          }}
        >
          logout
        </Link>
      );
    }

    return (
      <header className="homeHeader">
        {homeStatus}

        <nav className="usernav">
          {loginStatus}

          {userStatus}
        </nav>
      </header>
    );
  }
}
