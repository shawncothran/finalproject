import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Dashboard from './dashboard';
import Hero from './hero';

class Home extends React.Component {

  render() {
    var layout;
    if (false) {
      layout = <Dashboard />;
    } else {
      layout = <Hero />;
    }

    return (
      layout
    )
  }
}

export default Home;
