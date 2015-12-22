import React from 'react';
import moment from 'moment';
import Card from '../models/card';

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: "disabled"
    };
  }

  handleDate(e) {
    this.props.updateCard({
      date: e.target.value
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
    console.log(this.props);
    Card.postCard(this.props);
  }

  render() {
    let minTime = moment().add(7, "days").format('YYYY-MM-DD');
    let maxTime = moment().add(373, "days").format('YYYY-MM-DD');
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
