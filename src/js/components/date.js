import React from 'react';
import moment from 'moment';

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
        <h1>Pick when your card will arrive!</h1>
        <input type="date" min={minTime} max={maxTime} onChange={this.handleDate.bind(this)}/>
      </section>
    )
  }
}

export default Date;
