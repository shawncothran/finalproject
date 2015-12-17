import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>Preview</h1>
        <div className="preview" style={{backgroundColor: this.state.background}}></div>
      </section>
    )
  }
}

export default Preview;
