import React, { PropTypes } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>

        <h1>Snailephant: Never Remember Another Birthday!</h1>
        <nav>
          <Link to="/">Your Dashboard</Link>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </nav>

        <p> @C;</p>
      </header>
    )
  }
}


export default Header;
