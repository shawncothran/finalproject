import React, { Component } from 'react';
import { oneLineTrim } from 'common-tags';

export default class Get extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: null,
    };
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <section id="mc_embed_signup">
        <article className="subscribe-form">
          <img
            alt="snailephant logo"
            className="getLogo"
            src="https://s3.amazonaws.com/snailephant/snailephant-logo.svg"
          />

          <h2 className="hashtag">#ThatFeelingWhen</h2>

          <p className="getText">
            Few things feel worse than forgetting
            to send your mother a birthday card. SHE&#39;S YOUR MOM!
          </p>
          <p className="getText">
            Worst of all, your grandma will never forgive you for failing to remember her
            favorite holiday: Arbor day.</p>
          <p className="getText">Lucky for you, we can help you with all of this.</p>
          <p className="getText"><strong>Never forget to send a card again.</strong></p>
          <p className="getText">
            Snailephant lets you create and mail your own cards!
            Just pick the date you want it to arrive and let us do the work.
          </p>

          <form
            action={oneLineTrim`
              //snailephant.us13.list-manage.com
              /subscribe/post?u=d3512d4f3f484cc6509b89451&amp;id=f936622257
            `}
            className="validate"
            id="mc-embedded-subscribe-form"
            method="post"
            name="mc-embedded-subscribe-form"
            noValidate
            target="_self"
          >
            <section id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">Enter your email below to get started</label>

              <input
                className="email"
                id="mce-EMAIL"
                name="EMAIL"
                onChange={this.handleChange}
                placeholder="ex. helga@snailephant.com"
                required
                type="email"
                value={this.state.value}
              />

              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input
                  name="b_d3512d4f3f484cc6509b89451_f936622257"
                  tabIndex="-1"
                  type="text"
                  value=""
                />
              </div>

              <div className="clear">
                <input
                  className="button"
                  id="mc-embedded-subscribe"
                  name="subscribe"
                  type="submit"
                  value="Sign me up!"
                />
              </div>
            </section>
          </form>
        </article>
      </section>
    );
  }
}
