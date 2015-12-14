import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="homeHeader">
        <h1 className="headerTitle">
          <span>
            <Link to="/" className="logo">@c;</Link>
          </span>
          Snailephant. Never forget to send a card.
        </h1>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </header>
    )
  }
}

export default Header;
