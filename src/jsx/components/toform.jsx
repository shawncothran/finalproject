import React, { Component } from 'react';
import _ from 'lodash';

export default class ToForm extends Component {
  constructor(props) {
    super(props);

    this.handleToFormSubmit = this.handleToFormSubmit.bind(this);
  }

  handleToFormSubmit() {
    const data = _.reduce(this.refs, (total, element, key) => {
      const all = total;
      all[key] = element.value;

      return all;
    }, {});

    this.props.updateCard({
      to: data,
    });
  }

  render() {
    return (
      <section className="toForm">
        <h1>Pick your recipient!</h1>

        <fieldset>
          <label htmlFor="name">NAME</label>
          <input
            className="form"
            name="name"
            onChange={this.handleToFormSubmit}
            placeholder="Mommy Momephant"
            ref="name"
            required
            type="text"
            value={this.props.to.name}
          />
          <span className="required">*</span>

          <label htmlFor="address_line1">ADDRESS</label>
          <input
            className="form"
            name="address_line1"
            onChange={this.handleToFormSubmit}
            placeholder="123 Snail Way"
            ref="address_line1"
            required
            type="text"
            value={this.props.to.address_line1}
          />
          <span className="required">*</span>

          <label htmlFor="address_line2">ADDRESS 2</label>
          <input
            className="form"
            name="address_line2"
            onChange={this.handleToFormSubmit}
            placeholder="(optional)"
            ref="address_line2"
            type="text"
            value={this.props.to.address_line2}
          />

          <label htmlFor="address_city">CITY</label>
          <input
            className="form"
            name="address_city"
            onChange={this.handleToFormSubmit}
            placeholder="Nashville"
            ref="address_city"
            required
            type="text"
            value={this.props.to.address_city}
          />
          <span className="required">*</span>

          <label htmlFor="address_state">STATE</label>
          <select
            className="form"
            name="address_state"
            onChange={this.handleToFormSubmit}
            ref="address_state"
            required
            value={this.props.to.address_state}
          >
            <option value="TN">Tennessee</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <span className="required">*</span>

          <label htmlFor="address_zip">ZIP CODE</label>
          <input
            className="form"
            name="address_zip"
            onChange={this.handleToFormSubmit}
            placeholder="Zip Code"
            ref="address_zip"
            required
            type="text"
            value={this.props.to.address_zip}
          />
          <span className="required">*</span>
        </fieldset>
      </section>
    );
  }
}

ToForm.propTypes = {
  to: React.PropTypes.object,
  updateCard: React.PropTypes.func,
};
