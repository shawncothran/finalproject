import React from 'react';
import { Link } from 'react-router';

class Hero extends React.Component {

  render() {
    return (
      <section className="hero">
        <h2>
          You make it. We mail it. Create a card on your time. Snailephant never forgets to snail mail the card at the right time!
        </h2>
        <img className="heroVideo" src="https://s3.amazonaws.com/snailephant/heroVidOpt.gif"  alt="demo" title="demo" />
        <Link to="register" className="button">Create a card!</Link>
      </section>
    )
  }
}

export default Hero;
