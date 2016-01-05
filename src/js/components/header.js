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
      email = user.email;
    }
    let HomeStatus,
        LoginStatus,
        UserStatus;

      if (!User.access_token) {
        HomeStatus = <Link to="/" className="logo"><img className="logoImg" src="../assets/snailephant.png" alt="@c;" title="@c;" /></Link>
        LoginStatus = <Link to="login">Login</Link>
        UserStatus = <Link to="register">Register</Link>
      } else {
        HomeStatus = <Link to="dashboard" className="logo"><img className="logoImg" src="../assets/snailephant.png" alt="@c;" title="@c;" /></Link>
        LoginStatus = <Link to="subscription">{ user }</Link>
        UserStatus = <Link to="/" onClick={() => {
          User.logout();
        }}>Log Out</Link>
    }

    return (
      <header className="homeHeader">
        {HomeStatus}
        <span className="headerLogo">Snailephant!</span>
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
