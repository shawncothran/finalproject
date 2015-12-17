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

    this.handleUpdateCard = this.handleUpdateCard.bind(this)
  }

  handleUpdateCard(data) {
    let newData = Object.assign({}, this.state.front, data);
    this.setState({front: newData});
  }

  render() {
    let views = [
      (<Background front={this.state.front} updateCard={this.handleUpdateCard}/>),
      (<Text front={this.state.front} updateCard={this.handleUpdateCard}/>),
      (<Date front={this.state.front} updateCard={this.handleUpdateCard}/>),
      (<ToForm front={this.state.front} updateCard={this.handleUpdateCard}/>)];
    return (
      <section className="dashboard">
        <Link to="account">Account</Link>
        <Timeline />
        <CardCreator views = {views}/>
      </section>
    )
  }
}

export default Dashboard;
