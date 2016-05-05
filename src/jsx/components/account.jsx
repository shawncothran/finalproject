import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleSubscribe() {
    $.ajax({ url: 'https://twittertiy.herokuapp.com/users' });
  }

  render() {
    return (
      <form>
        <Link className="anchor" to="dashboard">Dashboard</Link>
        <input type="text" placeholder="finish me!" />
      </form>
    );
  }
}
