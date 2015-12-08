import React, { PropTypes } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';


import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child)
    })

    return (
      <div>
        <Header />

        {childrenWithProps}
      </div>
    )
  }
}

export default App;
