import React, { Component } from 'react';

export default class Preview extends Component {
  render() {
    const h1Style = {
      fontFamily: this.props.front.fontFamily,
      color: this.props.front.color,
      fontSize: this.props.front.fontSize,
    };

    return (
      <div className="preview" style={{ backgroundColor: this.props.front.background }}>
        <h1 style={h1Style}>{this.props.front.text}</h1>
      </div>
    );
  }
}

Preview.propTypes = {
  front: React.PropTypes.object,
};
