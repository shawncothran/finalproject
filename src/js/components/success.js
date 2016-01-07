import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'next',
      currentIndex: 0
    };
  }

  handleReset(e) {
    this.setState({
    });
  };

  render() {
    return (
      <section className="headPadding">
        <h1>Your card is scheduled!</h1>
        <p>Be sure you have an active subscription to send it.</p>
        <Link className="dashButton" to="dashboard">Start a new card!</Link>
      </section>
    )
  }
}

export default Success;
