import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="timeline">
        <h1>Timeline</h1>
        <div className="wrap">
          <iframe className="frame" src={<h1>hi</h1>}></iframe>
        </div>
      </section>
    )
  }
}

export default Timeline;
