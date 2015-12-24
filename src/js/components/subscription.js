import React from 'react';
import { Link } from 'react-router';

import User from '../models/user';

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      disableButton: false,
      errorMsg: "",
      plan: ""
    };
    this.handlePaySubmit = this.handlePaySubmit.bind(this);
    this.stripeResponseHandler = this.stripeResponseHandler.bind(this);
    this.handlePlanSelect = this.handlePlanSelect.bind(this);
    this.handleResults = this.handleResults.bind(this);

    Stripe.setPublishableKey('pk_test_eiTJaf9ETvML34B3RRoq2gRh');
  }



  handlePaySubmit(e) {
    e.preventDefault();
    this.setState({disableButton: true})
    Stripe.card.createToken(this.refs.form, this.stripeResponseHandler);
  };

  handlePlanSelect (e) {
  this.setState({
    plan: e.target.value,
    })
  }

  stripeResponseHandler (code, response) {
    let errorMsg,
    token,
    plan;

    if (response.error) {
      this.setState({
        errorMsg: response.error.message,
        disableButton: false
      })} else {
        let token = response.id;
        let plan = this.state.plan;
        User.pay({token, plan}, this.handleResults);
      }
    }

    handleResults(results) {
      if (!results) {
        this.setState({
          success: false
        });

      } else {
        this.setState({
          success: true
        });

      }
    }


render() {
  let resultsMsg;
  let cardVisible;
  if (this.state.plan) {
    cardVisible = (
      <div className="hide_until_plan_selected">
        <div className="form-row">
          <label>
            <span>Card Number</span>
            <input type="text" size="20" data-stripe="number"/>
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>CVC</span>
            <input type="text" size="4" data-stripe="cvc"/>
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>Expiration (MM/YYYY)</span>
            <input type="text" size="2" data-stripe="exp-month"/>
          </label>
          <span> / </span>
          <input type="text" size="4" data-stripe="exp-year"/>
        </div>

        <button type="submit" disabled={this.state.disableButton}>Submit Payment</button>
      </div>
    )
  }
  if (this.state.success) {
    resultsMsg = <p>You're all set! <Link to="dashboard">Head to your Dashboard</Link></p>
  } else if(this.state.success === false){
    resultsMsg = <p>Oops, something flubbed! Try again. If the error persists, email us at support@snailephant.com and we can walk you through it.</p>
  }

    return (
      <form className="subForm" ref="form" onSubmit={this.handlePaySubmit}>
        <div className="response" id="response"> { resultsMsg } </div>
        <span ref="payment-errors">{this.state.errorMsg}</span>
          <div className="form-row">
          <h1>Choose Your Plan</h1>
          <article>
            <input onClick={this.handlePlanSelect} type="button" value="solo"/>
            <label>Individual Card for $2</label>
          </article>
          <article>
            <input onClick={this.handlePlanSelect} type="button" value="basic"/>
            <label>3 Cards Each Month for $5/mo</label>
          </article>
          <article>
            <input onClick={this.handlePlanSelect} type="button" value="premium"/>
            <label>5 Cards Each Month for $8/mo</label>
          </article>
          <article>
            <input onClick={this.handlePlanSelect} type="button" value="platinum"/>
            <label>10 Cards Each Month for $14/mo</label>
          </article>
        </div>
        {cardVisible}
      </form>
    )
  }
}


export default Subscription;
