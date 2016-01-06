import React from 'react';
import moment from 'moment';

import Card from '../models/card';
import Timeline from './timeline';

class End extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: "disabled"
    };
  }

  handleReset(e) {
    this.setState({
    });
  };

  render() {
    return (
      <section>
        <h1>Your card is scheduled!</h1>
        <p>Be sure you have an active subscription to send it.</p>
        <button className="button"
                onClick={this.handleReset.bind(this)}>Start a new card!</button>
      </section>
    )
  }
}

export default End;
