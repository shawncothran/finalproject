import React from 'react';
import { Link } from 'react-router';
import User from '../models/user';

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    Stripe.setPublishableKey('sk_test_mvPrXPPjybaTLvDql3Fm4XUd');
  }
  render () {
    
    return (
      <form action="" method="POST" id="payment-form">
        <span className="payment-errors"></span>

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

        <button type="submit">Submit Payment</button>
      </form>
    )
  }
}

export default Subscription;
