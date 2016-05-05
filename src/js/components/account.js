import React from 'react';
import { Link } from 'react-router';

class Account extends React.Component {
  constructor(props){
    super(props)

    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleSubscribe() {
    $.ajax({
      url: 'https://twittertiy.herokuapp.com/users'
    })
  }

  render() {
    return (
      <Link className="anchor" to="dashboard">Dashboard</Link>

      <form>
        <input type="text" placeholder="finish me!"/>
      </form>
    )
  }
}

export default Account;
