import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import { Link } from 'react-router';

class Date extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDate(date) {
    this.props.updateCard(date)
  };

  render() {
    let minTime = moment().add(10, "days").format('YYYY-MM-DD');
    let maxTime = moment().add(376, "days").format('YYYY-MM-DD');
    console.log(minTime);
    return (
      <section>
        <h1>Pick the date you want your card to arrive by!</h1>
          <div className="preview" style={{backgroundColor: this.props.front.background}}>
            <h1 style={{fontFamily: this.props.front.font}}>{this.props.front.text}</h1>
          </div>
          <input type="date" min={minTime} max={maxTime} onChange={this.handleDate.bind(this)}/>
      </section>
    )
  }
}

export default Date;
