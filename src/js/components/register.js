import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();


    let data = {username: this.refs.username.value, password: this.refs.password.value};
    $.ajax({
      url: 'https://api.parse.com/1/users',
      type: 'POST',
      data: JSON.stringify(data)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up for Free</h2>
        <p>Make your first card in seconds</p>
        <input type="text" ref="username" placeholder="Millie@Snailephant.com"/>
        <input type="password" ref="password" placeholder="secret passcode"/>
        <input type="password" ref="passconfirm" placeholder="wait, what was that?"/>
        <input type="submit" value="sign up"/>
        <Link to="login">Already a member? Login</Link>
      </form>
    )
  }
}

export default Register;
