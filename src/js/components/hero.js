import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero">
        <h1 className="logo">@c;</h1>
        <h2>
          You make it. We mail it.
          You create the card on your time. Snailephant will never forget to snail mail the card at the appropriate time.
        </h2>
      </section>
    )
  }
}

export default Hero;
