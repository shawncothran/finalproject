import React, { Component } from 'react';

export default class Text extends Component {
  constructor(props) {
    super(props);

    this.handleText = this.handleText.bind(this);
    this.handleFontFamily = this.handleFontFamily.bind(this);
    this.handleFontSize = this.handleFontSize.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleText(event) {
    this.props.updateCard({
      front: {
        text: event.target.value,
      },
    });
  }

  handleFontFamily(event) {
    this.props.updateCard({
      front: {
        fontFamily: event.target.value,
      },
    });
  }

  handleFontSize(event) {
    this.props.updateCard({
      front: {
        fontSize: event.target.value,
      },
    });
  }

  handleColor(color) {
    this.props.updateCard({
      front: {
        color,
      },
    });
  }

  render() {
    return (
      <section>
        <h1>Pick your message & style!</h1>

        <textarea
          autoFocus
          className="cardText"
          maxLength="130"
          onChange={this.handleText}
          placeholder="Type your message here!"
          value={this.props.front.text}
        />

        <section className="fontSelects">
          <select className="fontFamily" onChange={this.handleFontFamily}>
            <option value="Annie Use Your Telescope">Annie Use Your Telescope</option>
            <option value="Great Vibes">Great Vibes</option>
            <option value="Playfair Display">Playfair Display</option>
            <option value="Raleway">Raleway</option>
            <option value="Mountains of Christmas">Mountains of Christmas</option>
          </select>

          <select className="fontSize" onChange={this.handleFontSize}>
            <option value="1.6rem">Medium</option>
            <option value="2.2rem">LARGE</option>
            <option value="1rem">small</option>
          </select>
        </section>

        <section className="fontColor">
          <div className="fontColorPicker one" onClick={this.handleColor('#000000')} />
          <div className="fontColorPicker two" onClick={this.handleColor('#505050')} />
          <div className="fontColorPicker three" onClick={this.handleColor('#ffffff')} />
          <div className="fontColorPicker four" onClick={this.handleColor('#c3002a')} />
          <div className="fontColorPicker five" onClick={this.handleColor('#00473d')} />
          <div className="fontColorPicker six" onClick={this.handleColor('#200282')} />
        </section>
      </section>
    );
  }
}

Text.propTypes = {
  front: React.PropTypes.object,
  updateCard: React.PropTypes.func,
};
