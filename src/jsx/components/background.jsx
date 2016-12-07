import React, { Component } from 'react';

export default class Background extends Component {
  constructor(props) {
    super(props);

    this.handleBackground.bind(this);
  }

  handleBackground(background) {
    this.props.updateCard({ front: { background } });
  }

  render() {
    return (
      <section>
        <h1>Pick your background!</h1>

        <section className="bgSelector">
          <div className="colorPicker one" onClick={this.handleBackground('#ffffff')} />
          <div className="colorPicker two" onClick={this.handleBackground('#898989')} />
          <div className="colorPicker three" onClick={this.handleBackground('#FF1747')} />
          <div className="colorPicker four" onClick={this.handleBackground('#FFFF77')} />
          <div className="colorPicker five" onClick={this.handleBackground('#FE9900')} />
          <div className="colorPicker six" onClick={this.handleBackground('#BBE0F3')} />
          <div className="colorPicker seven" onClick={this.handleBackground('#b30000')} />
          <div className="colorPicker eight" onClick={this.handleBackground('#87D5AB')} />
          <div className="colorPicker nine" onClick={this.handleBackground('#6036e3')} />
          <div className="colorPicker ten" onClick={this.handleBackground('#152743')} />
          <div className="colorPicker eleven" onClick={this.handleBackground('#029680')} />
          <div className="colorPicker twelve" onClick={this.handleBackground('#00ccff')} />
        </section>
      </section>
    );
  }
}

Background.propTypes = {
  updateCard: React.PropTypes.func,
};
