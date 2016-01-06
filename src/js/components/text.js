import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import { findDOMNode } from 'react-dom';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  handleText(event) {
    this.props.updateCard({
      front: {
        text: event.target.value
      }

    });
  };

  handleFontFamily(event) {
    this.props.updateCard({
      front: {
        fontFamily: event.target.value
      }

    });
  };

  handleFontSize(event) {
    this.props.updateCard({
      front: {
        fontSize: event.target.value
      }

    });
  };

  handleColor(color) {
    this.props.updateCard({
      front: {
        color
      }

    });
  };

  render() {
    return (
      <section>
        <h1>Pick your styles & your message!</h1>
        <textarea className="cardText" ref="text" maxLength="140" placeholder="Type your message here!" onChange={this.handleText.bind(this)} value={this.props.front.text} autofocus></textarea>
        <section className="fontSelects">
          <select className="fontFamily" onChange={this.handleFontFamily.bind(this)}>
            <option value='Annie Use Your Telescope'>Annie Use Your Telescope</option>
            <option value='Great Vibes'>Great Vibes</option>
            <option value='Playfair Display'>Playfair Display</option>
            <option value='Raleway'>Raleway</option>
            <option value='Mountains of Christmas'>Mountains of Christmas</option>
          </select>
          <select className="fontSize" onChange={this.handleFontSize.bind(this)}>
            <option value='2rem'>Medium</option>
            <option value='3rem'>LARGE</option>
            <option value='1.5rem'>small</option>
          </select>
        </section>
        <section className="fontColor">
          <div className="fontColorPicker one" onClick={this.handleColor.bind(this, '#000000')}></div>
          <div className="fontColorPicker two" onClick={this.handleColor.bind(this, '#505050')}></div>
          <div className="fontColorPicker three" onClick={this.handleColor.bind(this, '#ffffff')}></div>
          <div className="fontColorPicker four" onClick={this.handleColor.bind(this, '#c3002a')}></div>
          <div className="fontColorPicker five" onClick={this.handleColor.bind(this, '#00473d')}></div>
          <div className="fontColorPicker six" onClick={this.handleColor.bind(this, '#200282')}></div>
        </section>
      </section>
    )
  }
}

export default Text;
