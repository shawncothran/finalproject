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
    console.log('hi');
    if (this.state.currentIndex < this.props.views.length - 1) {
      this.setState({currentIndex: this.state.currentIndex + 1})
    }
  };

  render() {
    let previousStyle = {right: '100%'},
        currentStyle = {left: '0'},
        nextStyle = {left: '100%'},
    // let previousStyle,
    //     currentStyle,
    //     nextStyle,

        previous = this.props.views[this.state.currentIndex - 1],
        current = this.props.views[this.state.currentIndex],
        next = this.props.views[this.state.currentIndex + 1],

        previousButton = previous ? <button onClick={this.handleClickPrevious}>&lt;prev</button> : undefined,
        nextButton = next ? <button onClick={this.handleClickNext}>next&gt;</button> : undefined;

    return (
      <section className="cardCreator">
        <div style={previousStyle}>{previous}</div>
        {previousButton}
        <div style={currentStyle}>{current}</div>
        {nextButton}
        <div style={nextStyle}>{next}</div>
      </section>
    )
  }
}

export default CardCreator;
