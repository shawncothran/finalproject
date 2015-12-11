import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props){
    super(props)

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    let user = {email: this.refs.email.value, password: this.refs.password.value};
    $.ajax({
      url: 'https://twittertiy.herokuapp.com/users', headers: {}
    })
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="Millie@Snailefant.com"/>
        <input type="password" placeholder="password"/>
        <input type="submit" value="login"/>
        <Link to="register">Not a member? Sign Up</Link>
      </form>
    )
  }
}

export default Login;
