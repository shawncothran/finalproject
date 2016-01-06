import React from 'react';
import { Link } from 'react-router';

import User from '../models/user';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      email: null
    }
  }

  handleLogin(e) {
    e.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if(email && password) {
      User.login({username: email, password: password}, (error) => {
        if (!error) {
          this.setState({email: email});
          this.props.history.pushState(null, "dashboard");
        } else {
          alert("Hmmm... I don't remember that one. Try again");
        }
      })
    } else {
      alert("Hmmm... I don't remember that one. Try again");
      this.refs.email.value = "",
      this.refs.password.value = ""
    }
  }
  render() {
    return (
      <form className="userForm" onSubmit={this.handleLogin}>
        <h2>Log in</h2>
        <p>Manage and create your cards!</p>
        <input type="text" ref="email" placeholder="Millie@Snailephant.com" autofocus required/>
        <input type="password" ref="password" placeholder="password" required/>
        <input type="submit" value="login" required/>
        <Link to="register">Not a member? Sign Up</Link>
      </form>
    )
  }
}

export default Login;
