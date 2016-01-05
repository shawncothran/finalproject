import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import User from '../models/user';

const API_ROOT = 'http://snailephant.herokuapp.com/cards/';

class Timeline extends React.Component {
  render() {
    let cards = this.props.cards.map(function (card) {
      return <div className="wrap"><iframe className="frame" scrolling="no" key={card.id} src={API_ROOT + card.id} /></div>
    })

    return (
      <section className="timeline">
        <h1>Timeline</h1>
        <div className="cardWrapper">
          {cards}
        </div>
      </section>
    )
  }
}

export default Timeline;
