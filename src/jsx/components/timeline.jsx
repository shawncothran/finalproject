import React, { Component } from 'react';
import moment from 'moment';

const rootApi = 'http://snailephant.herokuapp.com/cards/';

export default class Timeline extends Component {
  render() {
    let cards = this.props.cards.map(card => (
      <div className="outerwrap">
        <div className="wrap">
          <iframe className="frame" scrolling="no" key={card.id} src={rootApi + card.id} />

          <date>{moment(card.date).format('MMM Do YYYY')}</date>
        </div>
      </div>
    ));

    if (!cards.length) {
      cards = <h1 className="timeline_nocards">Your Cards Will Appear Here.</h1>;
    }

    return (
      <section className="timeline">
        <h1>Timeline</h1>
        <div className="cardWrapper">{cards}</div>
      </section>
    );
  }
}

Timeline.propTypes = {
  cards: React.PropTypes.object,
};
