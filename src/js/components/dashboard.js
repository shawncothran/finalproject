import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Timeline from './timeline';
import CardCreator from './cardcreator';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="dashboard">
        <Timeline />
        <CardCreator />
      </section>
    )
  }
}

export default Dashboard;
