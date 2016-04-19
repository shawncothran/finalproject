import React from 'react';
import { Link } from 'react-router';

class Get extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: null
    }
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  render() {
    return (
      <section id="mc_embed_signup">
        <article className="subscribe-form">
          <img className="getLogo" src="https://s3.amazonaws.com/snailephant/snailephant-logo.svg" alt="snailephant logo"/>

          <h2 className="hashtag">#ThatFeelingWhen</h2>

          <p className="getText">Few things feel worse than forgetting to send your mother a birthday card. SHE'S YOUR MOM!</p>
          <p className="getText">Worst of all, your grandma will never forgive you for failing to remember her favorite holiday: Arbor day.</p>
          <p className="getText">Lucky for you, we can help you will all of this.</p>
          <p className="getText"><strong>Never forget to send a card again.</strong></p>
          <p className="getText">Snailephant lets you create and mial your own cards! Just pick the date you want it to arrive and let us do the work.</p>

          <form
            action="//snailephant.us13.list-manage.com/subscribe/post?u=d3512d4f3f484cc6509b89451&amp;id=f936622257"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate
          >
            <section id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">Enter your email below to get started</label>

              <input
                type="email"
                value={this.state.value}
                onChange={this.handleChange}
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="ex. helga@snailephant.com"
                required
              />

              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                <input
                  type="text"
                  name="b_d3512d4f3f484cc6509b89451_f936622257"
                  tabIndex="-1"
                  value=""
                />
              </div>

              <div className="clear">
                <input type="submit" value="Sign me up!" name="subscribe" id="mc-embedded-subscribe" className="button"/>
              </div>
            </section>
          </form>
        </article>
      </section>
    )
  }
}

export default Get;
