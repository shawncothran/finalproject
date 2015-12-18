import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CardCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      direction: 'next',
      currentIndex: 0
    }

    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  handleClickPrevious() {
    if (this.state.currentIndex) {
      this.setState({
        direction: 'previous',
        currentIndex: this.state.currentIndex - 1
      })
    }
  };

  handleClickNext() {
    if (this.state.currentIndex < this.props.views.length - 1) {
      this.setState({
        direction: 'next',
        currentIndex: this.state.currentIndex + 1
      })
    }
  };

  render() {
    let prevIndex = this.state.currentIndex - 1,
        currentIndex = this.state.currentIndex,
        nextIndex = this.state.currentIndex + 1,

        previous = this.props.views[prevIndex],
        current = this.props.views[currentIndex],
        next = this.props.views[nextIndex],

        previousButton = previous ? <button className="controlBtn previous" onClick={this.handleClickPrevious}>&lt;</button> : undefined,
        nextButton = next ? <button  className="controlBtn next" onClick={this.handleClickNext}>&gt;</button> : undefined;

    return (
      <section className="cardCreator">
        <ReactCSSTransitionGroup transitionName={`card__${this.state.direction}`} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <div className="slide currentSlide" key={`${currentIndex}_current`}>{current}</div>
        </ReactCSSTransitionGroup>
        <div className="controls">
          {previousButton}
          {nextButton}
        </div>
      </section>
    )
  }
}

export default CardCreator;
