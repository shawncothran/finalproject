import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Timeline from './timeline';
import CardCreator from './cardcreator';
import Background from './background';
import Text from './text';
import Date from './date';
import ToForm from './toform';
import Preview from './preview';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      front: {}
    }
  }

  render() {
    let views = [(<Background/>), (<Text/>), (<Date/>), (<ToForm/>), (<Preview/>)]
    return (
      <section className="dashboard">
        <Timeline />
        <CardCreator views = {views}/>
      </section>
    )
  }
}

export default Dashboard;
