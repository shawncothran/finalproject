import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import Moment from 'moment';

import User from '../models/user';
import Card from '../models/card';

const API_ROOT = 'http://snailephant.herokuapp.com/cards/';


class Timeline extends React.Component {
  render() {
    let cards = this.props.cards.map(function (card) {
      return <div className="outerwrap"><div className="wrap"><iframe className="frame" scrolling="no" key={card.id} src={API_ROOT + card.id} /><date>{Moment(card.date).format("MMM Do YY")}</date></div></div>
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
