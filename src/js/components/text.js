import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  handleText(event) {
    this.props.updateCard({
      text: event.target.value
    });
  };

  handleFont(event) {
    console.log('ih');
    this.props.updateCard({
      font: event.target.value
    });
  };

  render() {
    return (
      <section>
        <h1>Text</h1>
        <div className="preview" style={{backgroundColor: this.props.front.background}}>
          <h1 style={{fontFamily: this.props.front.font}}>{this.props.front.text}</h1>
        </div>
        <textarea className="cardText" maxLength="100" placeholder="Type your message here!" onChange={this.handleText.bind(this)} value={this.props.front.text}></textarea>
        <select onChange={this.handleFont.bind(this)}>
          <option value='Annie Use Your Telescope'>Annie Use Your Telescope</option>
          <option value='Great Vibes'>Great Vibes</option>
          <option value='Playfair Display'>Playfair Display</option>
          <option value='Raleway'>Raleway</option>
          <option value='Mountains of Christmas'>Mountains of Christmas</option>
        </select>
      </section>
    )
  }
}

export default Text;
