import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBackground(background) {
    this.props.updateCard({
      background: background
    });
  };

  render() {
    return (
      <section>
        <h1>Pick a Background!</h1>
        <section className="bgSelector">
          <div className="colorPicker one" onClick={this.handleBackground.bind(this, '#ffffff')}></div>
          <div className="colorPicker two" onClick={this.handleBackground.bind(this, '#898989')}></div>
          <div className="colorPicker three" onClick={this.handleBackground.bind(this, '#FF1747')}></div>
          <div className="colorPicker four" onClick={this.handleBackground.bind(this, '#FFFF77')}></div>
          <div className="colorPicker five" onClick={this.handleBackground.bind(this, '#FE9900')}></div>
          <div className="colorPicker six" onClick={this.handleBackground.bind(this, '#BBE0F3')}></div>
          <div className="colorPicker seven" onClick={this.handleBackground.bind(this, '#b30000')}></div>
          <div className="colorPicker eight" onClick={this.handleBackground.bind(this, '#87D5AB')}></div>
          <div className="colorPicker nine" onClick={this.handleBackground.bind(this, '#6036e3')}></div>
          <div className="colorPicker ten" onClick={this.handleBackground.bind(this, '#152743')}></div>
          <div className="colorPicker eleven" onClick={this.handleBackground.bind(this, '#029680')}></div>
          <div className="colorPicker twelve" onClick={this.handleBackground.bind(this, '#00ccff')}></div>
        </section>
      </section>
    )
  }
}

export default Background;
