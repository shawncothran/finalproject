import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let h1Style = {
      fontFamily: this.props.front.fontFamily,
      color: this.props.front.color,
      fontSize: this.props.front.fontSize
    };
    return (
      <div className="preview" style={{backgroundColor: this.props.front.background}}>
          <h1 style={h1Style}>{this.props.front.text}</h1>
      </div>
    )
  }
}

export default Preview;
