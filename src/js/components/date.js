import React from 'react';
import moment from 'moment';

import Card from '../models/card';
import Timeline from './timeline';

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: "disabled"
    };
  }

  handleDate(e) {
    this.props.updateCard({
      date: moment(e.target.value).subtract(7, "d").format('YYYY-MM-DD')
    });

    this.setState({
      style: {
        WebkitTransition: "opacity 3s ease",
        transition: "opacity 3s ease",
        opacity: "1",
        cursor: "pointer"
      },
      disabled: false
    });
  };

  handlePostCard(e) {
    Card.postCard(this.props, this.props.getUserCards);
  }

  render() {
    let minTime = moment().add(7, "d").format('YYYY-MM-DD');
    let maxTime = moment().add(373, "d").format('YYYY-MM-DD');
    return (
      <section>
        <h1>Pick when your card will arrive!</h1>
        <input type="date" min={minTime} max={maxTime} onChange={this.handleDate.bind(this)} />
        <button className="button submitCard"
                style={this.state.style}
                disabled={this.state.disabled}
                onClick={this.handlePostCard.bind(this)}>Schedule your card!</button>
      </section>
    )
  }
}

export default Date;
