import React from 'react';
import _ from 'lodash';

class ToForm extends React.Component {
  constructor(props){
    super(props);
  }

  handleToFormSubmit (e) {
    let data = _.reduce(this.refs, (total, element, key) => {
      total[key] = element.value;
      return total;
    }, {});


    this.props.updateCard({
      to: data
    });
  }

  render () {
    return (
      <section className="toForm">
        <h1>Pick your recipient!</h1>
        <fieldset>
          <label for="name">NAME</label>
          <input className='form' ref='name' name='name' type='text' placeholder='Mommy Momephant' onChange={this.handleToFormSubmit.bind(this)} value={this.props.to.name} required/><span className='required'>*</span>
          <label for="address_line1">ADDRESS</label>
          <input className='form' ref='address_line1' name='address_line1' type='text' placeholder='123 Snail Way' onChange={this.handleToFormSubmit.bind(this)} value={this.props.to.address_line1} required/><span className='required'>*</span>
          <label for="address_line2">ADDRESS 2</label>
          <input className='form' ref='address_line2' name='address_line2' type='text' placeholder='Apt. 321' onChange={this.handleToFormSubmit.bind(this)} value={this.props.to.address_line2} /><span> </span>
          <label for="address_city">CITY</label>
          <input className='form'  ref='address_city' name='address_city' type='text' placeholder='Nashville' onChange={this.handleToFormSubmit.bind(this)} value={this.props.to.address_city} required/><span className='required'>*</span>
          <label for="address_state">STATE</label>
          <select className='form' ref='address_state' name='address_state' onChange={this.handleToFormSubmit.bind(this)} value={this.props.to.address_state} required>
            <option value='TN'>Tennessee</option>
            <option value='AL'>Alabama</option>
            <option value='AK'>Alaska</option>
            <option value='AZ'>Arizona</option>
            <option value='AR'>Arkansas</option>
            <option value='CA'>California</option>
            <option value='CO'>Colorado</option>
            <option value='CT'>Connecticut</option>
            <option value='DE'>Delaware</option>
            <option value='DC'>District Of Columbia</option>
            <option value='FL'>Florida</option>
            <option value='GA'>Georgia</option>
            <option value='HI'>Hawaii</option>
            <option value='ID'>Idaho</option>
            <option value='IL'>Illinois</option>
            <option value='IN'>Indiana</option>
            <option value='IA'>Iowa</option>
            <option value='KS'>Kansas</option>
            <option value='KY'>Kentucky</option>
            <option value='LA'>Louisiana</option>
            <option value='ME'>Maine</option>
            <option value='MD'>Maryland</option>
            <option value='MA'>Massachusetts</option>
            <option value='MI'>Michigan</option>
            <option value='MN'>Minnesota</option>
            <option value='MS'>Mississippi</option>
            <option value='MO'>Missouri</option>
            <option value='MT'>Montana</option>
            <option value='NE'>Nebraska</option>
            <option value='NV'>Nevada</option>
            <option value='NH'>New Hampshire</option>
            <option value='NJ'>New Jersey</option>
            <option value='NM'>New Mexico</option>
            <option value='NY'>New York</option>
            <option value='NC'>North Carolina</option>
            <option value='ND'>North Dakota</option>
            <option value='OH'>Ohio</option>
            <option value='OK'>Oklahoma</option>
            <option value='OR'>Oregon</option>
            <option value='PA'>Pennsylvania</option>
            <option value='RI'>Rhode Island</option>
            <option value='SC'>South Carolina</option>
            <option value='SD'>South Dakota</option>
            <option value='TX'>Texas</option>
            <option value='UT'>Utah</option>
            <option value='VT'>Vermont</option>
            <option value='VA'>Virginia</option>
            <option value='WA'>Washington</option>
            <option value='WV'>West Virginia</option>
            <option value='WI'>Wisconsin</option>
            <option value='WY'>Wyoming</option>
          </select>	<span className='required'>*</span>
          <label for="address_zip">ZIP CODE</label>
          <input className='form' ref='address_zip' name='address_zip' type='text' placeholder='Zip Code' onChange={this.handleToFormSubmit.bind(this)} value={this.props.to.address_zip} required/><span className='required'>*</span>
        </fieldset>
      </section>
    )
  }
}

export default ToForm;
