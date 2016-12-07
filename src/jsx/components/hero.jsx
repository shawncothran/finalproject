import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Hero extends Component {

  render() {
    return (
      <section className="hero">
        <h2>
          You make it. We mail it. Create a card on your time.
          Snailephant never forgets to snail mail the card at the right time!
        </h2>

        <Link to="register" className="button -full">Create a card!</Link>

        <img
          alt="demo"
          className="heroVideo"
          src="https://s3.amazonaws.com/snailephant/heroVidOpt.gif"
          title="demo"
        />
      </section>
    );
  }
}
