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

  render() {
    return (
      <section>
        <h1>Text</h1>
        <div className="preview" style={{backgroundColor: this.props.front.background}}><h1>{this.props.front.text}</h1></div>
        <textarea className="cardText" maxLength="100" placeholder="Type your message here!" onChange={this.handleText.bind(this)} value={this.props.front.text}></textarea>

      </section>
    )
  }
}

export default Text;
