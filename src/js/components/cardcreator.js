import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Preview from './preview';

class CardCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      direction: 'next',
      currentIndex: 0,
    }

    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  handleClickPrevious() {
    if (this.state.currentIndex) {
      this.setState({
        direction: 'previous',
        currentIndex: this.state.currentIndex - 1,
      })
    }
  };

  handleClickNext() {
    if (this.state.currentIndex < this.props.views.length - 1) {
      this.setState({
        direction: 'next',
        currentIndex: this.state.currentIndex + 1,
      })
    }
  };

  render() {
    let prevIndex    = this.state.currentIndex - 1;
    let currentIndex = this.state.currentIndex;
    let nextIndex    = this.state.currentIndex + 1;

    let previous = this.props.views[prevIndex];
    let current  = this.props.views[currentIndex];
    let next     = this.props.views[nextIndex];

    let previousButton = previous ? <button
                                      className="controlBtn previous"
                                      onClick={this.handleClickPrevious}>
                                      &#10216;
                                    </button> : undefined;
    let nextButton     = next     ? <button
                                      className="controlBtn next"
                                      onClick={this.handleClickNext}>
                                      &#10217;
                                    </button> : undefined;

    return (
      <section className="cardCreator">
        <Preview front={this.props.front} />

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
