import _ from 'lodash';
import React, { Component } from 'react';
import $ from 'jquery';

import Background from './background';
import DateContainer from './dateContainer';
import Text from './text';
import Timeline from './timeline';
import ToForm from './toform';
import User from '../models/user';

const API_ROOT = 'http://snailephant.herokuapp.com/cards/';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      date: {},
      front: {
        background: '#ddd',
        color: '#000',
        fontFamily: 'Annie Use Your Telescope',
        fontSize: '1.6rem',
      },
      to: {
        address_line2: '(optional)',
      },
    };

    this.getUserCards = this.getUserCards.bind(this);
    this.handleUpdateCard = this.handleUpdateCard.bind(this);
  }

  // <CardCreator {...this.state}  views = {views}/>
  const views = [
    (<Background {...this.state} updateCard={this.handleUpdateCard} />),
    (<Text {...this.state} updateCard={this.handleUpdateCard} />),
    (<ToForm {...this.state} updateCard={this.handleUpdateCard} />),
    (<DateContainer
      {...this.state}
      history={this.props.history}
      getUserCards={this.getUserCards}
      updateCard={this.handleUpdateCard}
    />),
  ];

  componentWillMount() {
    this.getUserCards();
  }

  getUserCards() {
    const headers = {};

    if (User.access_token) {
      headers.Authorization = `Bearer  ${User.access_token}`;
    }

    $.ajax({
      dataType: 'json',
      headers,
      type: 'GET',
      url: API_ROOT,
    }).then((response) => {
      this.setState({ cards: response });
    });
  }

  handleUpdateCard(data) {
    const state = _.merge(this.state, data);
    this.setState(state);
  }

  render() {
    const childrenWithProps = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        cards: this.state.cards,
        date: this.state.date,
        front: this.state.front,
        to: this.state.to,
        views,
      })
    );

    return (
      <section className="dashboard">
        <Timeline cards={this.state.cards} />

        {childrenWithProps}
      </section>
    );
  }
}

Dashboard.propTypes = {
  history: React.PropTypes.object,
  children: React.PropTypes.element,
};
