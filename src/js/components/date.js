import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Date extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBackground(background) {
    this.props.updateCard(background)
  };

  render() {
    return (
      <section>
        <h1>Date</h1>
        <div className="preview" style={{backgroundColor: this.props.front.background}}></div>
      </section>
    )
  }
}

export default Date;
