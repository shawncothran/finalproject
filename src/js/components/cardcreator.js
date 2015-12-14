import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class CardCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      currentIndex: 0
    }

    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  handleClickPrevious() {
    if (this.state.currentIndex) {
      this.setState({currentIndex: this.state.currentIndex - 1})
    }
  };

  handleClickNext() {
    if (this.state.currentIndex < this.props.views.length - 1) {
      this.setState({currentIndex: this.state.currentIndex + 1})
    }
  };

  render() {
    let previous = this.props.views[this.state.currentIndex -1],
        current = this.props.views[this.state.currentIndex],
        next = this.props.views[this.state.currentIndex + 1];

    let previousButton = previous ? <button onClick={this.handleClickPrevious}>&lt;prev</button> : undefined;
    let nextButton = next ? <button onClick={this.handleClickNext}>next&gt;</button> : undefined;

    return (
      <section className="cardCreator">
        {previous}
        {previousButton}
        {current}
        {nextButton}
        {next}
      </section>
    )
  }
}

export default CardCreator;
