import _ from 'lodash';
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Timeline from './timeline';
import CardCreator from './cardcreator';
import Background from './background';
import Text from './text';
import Date from './date';
import ToForm from './toform';
import Card from '../models/card';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      front: {
        background: "#dddddd",
        fontFamily: "Annie Use Your Telescope",
        color: "#000",
        fontSize: "2em"
      },
      to: {
        address_line2: "(optional)"
      },
      date: {}
    }

    this.handleUpdateCard = this.handleUpdateCard.bind(this)
  }

  handleUpdateCard(data) {
    let state = _.merge(this.state, data);
    this.setState(state);
    console.log(state);
  }

  saveCard() {
    var card = new Card();
    card.postCard(this.state);
  }

  render() {
    let views = [
      (<Background {...this.state} updateCard={this.handleUpdateCard}/>),
      (<Text {...this.state} updateCard={this.handleUpdateCard}/>),
      (<ToForm {...this.state} updateCard={this.handleUpdateCard}/>),
      (<Date {...this.state} updateCard={this.handleUpdateCard}/>)];
    return (
      <section className="dashboard">
        <Timeline />
        <CardCreator {...this.state}  views = {views}/>
      </section>
    )
  }
}

export default Dashboard;
