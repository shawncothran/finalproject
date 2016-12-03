import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Preview from './preview';

export default class CardCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: 'next',
      currentIndex: 0,
    };

    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  handleClickPrevious() {
    if (this.state.currentIndex) {
      this.setState({
        direction: 'previous',
        currentIndex: this.state.currentIndex - 1,
      });
    }
  }

  handleClickNext() {
    if (this.state.currentIndex < this.props.views.length - 1) {
      this.setState({
        direction: 'next',
        currentIndex: this.state.currentIndex + 1,
      });
    }
  }

  render() {
    const prevIndex = this.state.currentIndex - 1;
    const currentIndex = this.state.currentIndex;
    const nextIndex = this.state.currentIndex + 1;

    const previous = this.props.views[prevIndex];
    const current = this.props.views[currentIndex];
    const next = this.props.views[nextIndex];

    const previousButton = previous ? (
      <button
        className="controlBtn previous"
        onClick={this.handleClickPrevious}
      >
        &#10216;
      </button>
    ) : undefined;
    const nextButton = next ? (
      <button
        className="controlBtn next"
        onClick={this.handleClickNext}
      >
        &#10217;
      </button>
    ) : undefined;

    return (
      <section className="cardCreator">
        <Preview front={this.props.front} />

        <ReactCSSTransitionGroup
          transitionName={`card__${this.state.direction}`}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div
            className="slide currentSlide"
            key={`${currentIndex}_current`}
          >
            {current}
          </div>
        </ReactCSSTransitionGroup>

        <div className="controls">
          {previousButton}
          {nextButton}
        </div>
      </section>
    );
  }
}
