import React, { Component } from 'react';

import Dashboard from './dashboard';
import Hero from './hero';
import User from '../models/user';

export default class Home extends Component {

  render() {
    let layout;

    if (!User.access_token) {
      layout = <Dashboard />;
    } else {
      layout = <Hero />;
    }

    return layout;
  }
}
