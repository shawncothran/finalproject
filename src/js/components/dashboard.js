import _ from 'lodash';
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import User from "../models/user";
import Timeline from './timeline';
import CardCreator from './cardcreator';
import Background from './background';
import Text from './text';
import DateContainer from './dateContainer';
import ToForm from './toform';
import Card from '../models/card';

const API_ROOT = 'http://snailephant.herokuapp.com/cards/';

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
      date: {},
      cards: []
    }

    this.handleUpdateCard = this.handleUpdateCard.bind(this)
    this.getUserCards = this.getUserCards.bind(this)
  }

  componentWillMount() {
    this.getUserCards();
  }

  handleUpdateCard(data) {
    let state = _.merge(this.state, data);
    this.setState(state);
  }

  getUserCards() {
    let headers = {};

    if (User.access_token) {
        headers['Authorization'] = 'Bearer ' + User.access_token;
    }

    $.ajax({
      url: API_ROOT,
      headers: headers,
      type: 'GET',
      dataType: "json"
    }).then((response) => {
      let cards = response;
      this.setState({cards: cards})
    })
  }

  render() {
    // <CardCreator {...this.state}  views = {views}/>
    let views = [
      (<Background {...this.state} updateCard={this.handleUpdateCard}/>),
      (<Text {...this.state} updateCard={this.handleUpdateCard}/>),
      (<ToForm {...this.state} updateCard={this.handleUpdateCard}/>),
      (<DateContainer {...this.state} history={this.props.history} getUserCards={this.getUserCards} updateCard={this.handleUpdateCard}/>)];
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {...this.state, views})
    })
    return (
      <section className="dashboard">
        <Timeline cards={this.state.cards}/>
        {childrenWithProps}
      </section>
    )
  }
}

export default Dashboard;
