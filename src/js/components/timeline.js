import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import User from '../models/user';

const API_ROOT = 'http://snailephant.herokuapp.com/cards/';

class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    this.getUserCards.bind(this)();
  }

  getUserCards() {
    let headers = {};

    console.log('hello', User.access_token);

    if (User.access_token) {
        headers['Authorization'] = 'Bearer ' + User.access_token;
    }

    $.ajax({
      url: API_ROOT,
      headers: headers,
      type: 'GET',
      dataType: "json"
    }).then((response) => {
      let cards = response;
      this.setState({cards: cards})
      console.log(cards);
    })
  }

  render() {
    let cards = this.state.cards.map(function (card) {
      console.log(API_ROOT + card.id);
      return <iframe className="frame" key={card.id} src={API_ROOT + card.id} />
    })

    return (
      <section className="timeline">
        <h1>Timeline</h1>
        <div className="wrap">
          {cards}
        </div>
      </section>
    )
  }
}

export default Timeline;
