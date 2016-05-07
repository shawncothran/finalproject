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

          <h2 className="hashtag">#ForgettingTheCard</h2>
          <p className="getText headline"><strong>Never forget to send a card again.</strong></p>
          <p className="getText">Stop forgetting to buy a your mother a birthday day card.</p>
          <Link className="logo" to="/"><p className="getText">In 3 minutes you can create and send a card.</p></Link>
          <p className="getText">All from your computer.</p>
          <p className="getText">You just pick the date you want the card to arrive and we will do the rest.</p>
          <p className="getText">Just pick the date you want it to arrive and let us do the work.</p>

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
