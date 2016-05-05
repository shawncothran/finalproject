import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import User from '../models/user';

class Subscription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      disableButton: false,
      errorMsg: "",
      plan: "",
    };

    this.handlePaySubmit = this.handlePaySubmit.bind(this);
    this.stripeResponseHandler = this.stripeResponseHandler.bind(this);
    this.handleResults = this.handleResults.bind(this);
    this.hideResults = this.hideResults.bind(this);

    Stripe.setPublishableKey('pk_test_eiTJaf9ETvML34B3RRoq2gRh');
  }

  handlePaySubmit(e) {
    e.preventDefault();

    this.setState({disableButton: true, error: null, errorMsg: ''})

    Stripe.card.createToken(this.refs.form, this.stripeResponseHandler);
  };

  handlePlanSelect (plan) {
    this.setState({
      plan: plan,
    })
  }

  stripeResponseHandler (code, response) {
    let errorMsg;
    let token;
    let plan;

    if (response.error) {
      this.setState({
        errorMsg: response.error.message,
        disableButton: false,
      })
    } else {
      let token = response.id;
      let plan = this.state.plan;

      User.pay({token, plan}, this.handleResults);
    }
  }

  handleResults(results) {
    if (!results) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false
      });
    }

    this.refs.cc.value = "";
    this.refs.cvc.value = "";
    this.refs.mo.value = "";
    this.refs.yr.value = "";
  }

  hideResults(e) {
    this.setState({
      error: null
    });
  }

  render() {
    let resultsMsg;
    let cardVisible;

    if (this.state.plan) {
      let planClasses = classNames({
        hide_until_plan_selected: true,
        solo: this.state.plan === 'solo',
        basic: this.state.plan === 'basic',
        premium: this.state.plan === 'premium',
        platinum: this.state.plan === 'platinum',
      });

      cardVisible = (
        <div className={planClasses} key={this.state.plan}>
          <h3 id="selected_plan">{this.state.plan}</h3>
          <div className="form-row">
            <label>
              <span className="cc">Card Number</span>
              <input type="text" ref="cc" size="20" data-stripe="number"/>
            </label>
          </div>

          <div className="form-row">
            <label>
              <span className="cc">CVC</span>
              <input type="text" ref="cvc" size="4" data-stripe="cvc"/>
            </label>
          </div>

          <div className="form-row">
            <label className="float">
              <span className="cc">Expiration (MM/YYYY)</span>
              <input type="text" ref="mo" size="2" data-stripe="exp-month"/>
            </label>
            <span id="YYYY"> / </span>
            <input type="text" ref="yr" size="4" data-stripe="exp-year"/>
          </div>

          <button className="paymentSubmit" type="submit" disabled={this.state.disableButton}>Submit Payment</button>
        </div>
      )
    }

    if (this.state.error === false) {
      resultsMsg = <div className="successMsg"><button onClick={this.hideResults}>X</button><p>You're all set! <Link className="anchor" to="dashboard">Head to your Dashboard</Link></p></div>
    } else if (this.state.error === true){
      resultsMsg = <div className="failMsg"><button onClick={this.hideResults}>X</button><p>Oops, something flubbed! Try again. If the error persists, email us at support@snailephant.com and we can walk you through it.</p></div>
    }

    return (
      <form className="subForm" ref="form" onSubmit={this.handlePaySubmit}>
          <div className="form-row">
          <h1>Choose Your Snailscription Plan</h1>
          <article className="plan" id="solo" onClick={this.handlePlanSelect.bind(this, 'solo')}>
            <p>solo</p>
            <label>Individual Card for $2</label>
          </article>
          <article className="plan" id="basic" onClick={this.handlePlanSelect.bind(this, 'basic')}>
            <p>basic</p>
            <label>3 Cards Each Month for $5/mo</label>
          </article>
          <article className="plan" id="premium" onClick={this.handlePlanSelect.bind(this, 'premium')}>
            <p>premium</p>
            <label>5 Cards Each Month for $8/mo</label>
          </article>
          <article className="plan" id="platinum" onClick={this.handlePlanSelect.bind(this, 'platinum')}>
            <p>platinum</p>
            <label>10 Cards Each Month for $14/mo</label>
          </article>
        </div>
        <div className="response" id="response"> { resultsMsg } </div>
        <div  className="failMsg"ref="payment-errors">{this.state.errorMsg}</div>
        <ReactCSSTransitionGroup transitionName="fancy" transitionEnterTimeout={500} transitionLeaveTimeout={500}>{cardVisible}</ReactCSSTransitionGroup>
      </form>
    )
  }
}

export default Subscription;
