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
    // let previousStyle = {position: 'absolute'; right: '0';},
    //     currentStyle = {position: 'absolute'; left: '0';},
    //     nextStyle = {position: 'absolute'; left: '100%';},
    let previousStyle,
        currentStyle,
        nextStyle,

        previous = (<div style={previousStyle}>{this.props.views[this.state.currentIndex - 1]}</div>),
        current = (<div style={currentStyle}>{this.props.views[this.state.currentIndex]}</div>),
        next = (<div style={nextStyle}>{this.props.views[this.state.currentIndex + 1]}</div>),

        previousButton = previous ? <button onClick={this.handleClickPrevious}>&lt;prev</button> : undefined,
        nextButton = next ? <button onClick={this.handleClickNext}>next&gt;</button> : undefined;

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
