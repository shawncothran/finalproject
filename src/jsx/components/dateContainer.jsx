import React, { Component } from 'react';
import moment from 'moment';

import Card from '../models/card';

export default class DateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: 'disabled',
    };

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handlePostCard = this.handlePostCard.bind(this);
  }

  handleDate(e) {
    this.props.updateCard({
      date: moment(e.target.value).subtract(7, 'd').format('YYYY-MM-DD'),
    });

    this.setState({
      style: {
        WebkitTransition: 'opacity 3s ease',
        transition: 'opacity 3s ease',
        opacity: '1',
        cursor: 'pointer',
      },
      disabled: false,
    });
  }

  handleSuccess() {
    this.props.history.pushState({}, '/success');
    this.props.getUserCards();
  }

  handlePostCard() {
    Card.postCard(this.props, this.handleSuccess);
  }

  render() {
    const minTime = moment().add(7, 'd').format('YYYY-MM-DD');
    const maxTime = moment().add(373, 'd').format('YYYY-MM-DD');

    return (
      <section>
        <h1>Pick when your card will arrive!</h1>
        <input type="date" min={minTime} max={maxTime} onChange={this.handleDate} />
        <button
          className="button submitCard -full"
          style={this.state.style}
          disabled={this.state.disabled}
          onClick={this.handlePostCard}
        >
          Schedule your card!
        </button>
      </section>
    );
  }
}

DateContainer.propTypes = {
  getUserCards: React.PropTypes.func,
  history: React.PropTypes.object,
  updateCard: React.PropTypes.func,
};
