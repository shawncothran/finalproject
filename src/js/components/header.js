import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>@c; Snailephant. Never forget to send a card.</h1>
        <nav>
          <Link to="/">Your Dashboard</Link>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
