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

  render() {
    return (
      <section className="headPadding">
        <div className="preview">
          <h1>Your card is scheduled!</h1>
        </div>
        <section className="subForm -centered">
          <Link className="button successButton" to="subscription">Manage Subscription</Link>
          <Link className="button successButton" to="dashboard">Start a new card!!</Link>
        </section>
      </section>
    )
  }
}

export default Success;
