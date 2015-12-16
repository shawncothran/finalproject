import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Background extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      background: null
    }
  }

  handleBackground(background) {
    this.setState({background})
    console.log(this.state);
  };

  render() {
    return (
      <section>
        <h1>Pick a Background!</h1>
        <section className="bgSelector">
          <div className="colorPicker primary" onClick={this.handleBackground.bind(this, '#b30000')}></div>
          <div className="colorPicker secondary" onClick={this.handleBackground.bind(this, '#00ccff')}></div>
          <div className="colorPicker tertiary" onClick={this.handleBackground.bind(this, '#6036e3')}></div>
        </section>
      </section>
    )
  }
}

export default Background;
