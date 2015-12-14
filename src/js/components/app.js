import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import Header from './header';
import Hero from './hero';
import ToForm from './toform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toform: "",
      date: "",
      html: ""
    }
  }

  render () {
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child)
    })

    return (
      <div>
        <Header />
        <Hero />
        <Link to="register" className="button">Create a card!</Link>
        {childrenWithProps}
      </div>
    )
  }
}

export default App;
