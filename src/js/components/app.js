import React, { Component } from 'react';

import User from '../models/user';
import Header from './header';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toform: '',
      date: '',
      html: '',
    };
  }

  componentDidMount() {
    User.checkloginstatus();
  }

  render() {
    const childrenWithProps =
      React.Children.map(this.props.children, child => React.cloneElement(child));

    return (
      <div>
        <Header />

        {childrenWithProps}
      </div>
    );
  }
}
