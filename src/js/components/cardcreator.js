import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Background from './background';
import Text from './text';
import Date from './date';
import Recipient from './recipient';

class CardCreator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className="cardCreator">
        {previous}
        {visible}
        {next}
      </section>
    )
  }
}

export default CardCreator;
