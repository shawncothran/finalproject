import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import User from '../models/user';

export default class Subscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      disableButton: false,
      errorMsg: '',
      plan: '',
    };

    this.handlePaySubmit = this.handlePaySubmit.bind(this);
    this.handlePlanSelect = this.handlePlanSelect.bind(this);
    this.stripeResponseHandler = this.stripeResponseHandler.bind(this);
    this.handleResults = this.handleResults.bind(this);
    this.hideResults = this.hideResults.bind(this);

    /* global someFunction Stripe:true */
    /* eslint no-undef: "error" */
    Stripe.setPublishableKey('pk_test_eiTJaf9ETvML34B3RRoq2gRh');
  }

  handlePaySubmit(e) {
    e.preventDefault();

    this.setState({ disableButton: true, error: null, errorMsg: '' });

    Stripe.card.createToken(this.formRef, this.stripeResponseHandler);
  }

  handlePlanSelect(plan) {
    this.setState({
      plan,
    });
  }

  stripeResponseHandler(code, response) {
    let token;
    let plan;

    if (response.error) {
      this.setState({
        errorMsg: response.error.message,
        disableButton: false,
      });
    } else {
      token = response.id;
      plan = this.state.plan;

      User.pay({ token, plan }, this.handleResults);
    }
  }

  handleResults(results) {
    if (!results) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }

    this.ccRef.value = '';
    this.cvcRef.value = '';
    this.moRef.value = '';
    this.yrRef.value = '';
  }

  hideResults() {
    this.setState({ error: null });
  }

  render() {
    let resultsMsg;
    let cardVisible;

    if (this.state.plan) {
      const planClasses = classNames({
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
            <label htmlFor="cc">
              <span className="cc">Card Number</span>
              <input
                type="text"
                ref={(cc) => {
                  this.ccRef = cc;
                  return this.ccRef;
                }}
                name="cc"
                size="20"
                data-stripe="number"
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="cvc">
              <span className="cc">CVC</span>
              <input
                data-stripe="cvc"
                name="cvc"
                ref={(cvc) => {
                  this.cvcRef = cvc;
                  return this.cvcRef;
                }}
                size="4"
                type="text"
              />
            </label>
          </div>

          <div className="form-row">
            <label className="float" htmlFor="mo">
              <span className="cc">Expiration (MM/YYYY)</span>
              <input
                data-stripe="exp-month"
                name="mo"
                ref={(mo) => {
                  this.moRef = mo;
                  return this.moRef;
                }}
                size="2"
                type="text"
              />
            </label>
            <span id="YYYY"> / </span>
            <input
              data-stripe="exp-year"
              ref={(yr) => {
                this.yrRef = yr;
                return this.yrRef;
              }}
              size="4"
              type="text"
            />
          </div>

          <button
            className="paymentSubmit"
            type="submit"
            disabled={this.state.disableButton}
          >
            Submit Payment
          </button>
        </div>
      );
    }

    if (this.state.error === false) {
      resultsMsg = (
        <div className="successMsg">
          <button onClick={this.hideResults}>X</button>
          <p>You&#39;re all set! <Link className="anchor" to="dashboard">
            Head to your Dashboard</Link>
          </p>
        </div>);
    } else if (this.state.error === true) {
      resultsMsg = (
        <div className="failMsg">
          <button onClick={this.hideResults}>X</button>
          <p>
            Oops, something flubbed! Try again
            . If the error persists
            , email us at support@snailephant.com and we can walk you through it.
          </p>
        </div>);
    }

    return (
      <form
        className="subForm"
        onSubmit={this.handlePaySubmit}
        ref={(form) => {
          this.formRef = form;
          return this.formRef;
        }}
      >
        <div className="form-row">
          <h1>Choose Your Snailscription Plan</h1>
          <article className="plan" id="solo" name="solo" onClick={this.handlePlanSelect('solo')}>
            <p>solo</p>
            <label htmlFor="solo">Individual Card for $2</label>
          </article>
          <article className="plan" id="basic" name="basic" onClick={this.handlePlanSelect('basic')}>
            <p>basic</p>
            <label htmlFor="basic">3 Cards Each Month for $5/mo</label>
          </article>
          <article className="plan" id="premium" name="premium" onClick={this.handlePlanSelect('premium')}>
            <p>premium</p>
            <label htmlFor="premium">5 Cards Each Month for $8/mo</label>
          </article>
          <article className="plan" id="platinum" name="platinum" onClick={this.handlePlanSelect('platinum')}>
            <p>platinum</p>
            <label htmlFor="platinum">10 Cards Each Month for $14/mo</label>
          </article>
        </div>
        <div
          className="response"
          id="response"
        >
          {resultsMsg}
        </div>
        <div
          className="failMsg"
        >
          {this.state.errorMsg}
        </div>
        <ReactCSSTransitionGroup
          transitionName="fancy"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {cardVisible}
        </ReactCSSTransitionGroup>
      </form>
    );
  }
}
