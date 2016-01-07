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
          <Link className="subButton" to="dashboard">Manage Subscription</Link>
          <Link className="successButton" to="dashboard">Start a new card!!</Link>
        </div>
      </section>
    )
  }
}

export default Success;
