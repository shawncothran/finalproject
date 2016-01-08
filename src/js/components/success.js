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
        <Link className="subButton" to="subscription">Manage Subscription</Link>
        <Link className="successButton" to="dashboard">Start a new card!!</Link>
      </section>
    )
  }
}

export default Success;
