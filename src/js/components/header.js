import React from 'react';
import { Link } from 'react-router';

import User from '../models/user';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = JSON.parse(localStorage.getItem('header'));
    let email;
    if (user) {
      email = user.email
    }
    let HomeStatus,
        LoginStatus,
        UserStatus;

      if (!User.access_token) {
        HomeStatus = <Link className="logo" to="/">
                       <img className="logoImg"
                            src="https://s3.amazonaws.com/snailephant/snailephant-logo.svg"
                            alt="snailephant logo"
                            title="snailephant" />
                     </Link>
        LoginStatus = <Link className="anchor" to="login">Login</Link>
        UserStatus = <Link className="anchor" to="register">Register</Link>
      } else {
        HomeStatus = <Link className="logo" to="dashboard">
                       <img className="logoImg"
                            src="https://s3.amazonaws.com/snailephant/snailephant-logo.svg"
                            alt="snailephant logo"
                            title="snailephant" />
                       </Link>
        LoginStatus = <Link className="anchor" to="subscription">{ email }</Link>
        UserStatus = <Link className="anchor" to="/" onClick={() => {
          User.logout();
        }}>logout</Link>
    }

    return (
      <header className="homeHeader">
        {HomeStatus}
        <h1 className="headerTitle">
          Never forget to send a card.
        </h1>
        <nav className="usernav">
          {LoginStatus}
          {UserStatus}
        </nav>
      </header>
    )
  }
}

export default Header;
