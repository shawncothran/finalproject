import React from 'react';
import { Link } from 'react-router';

import User from '../models/user';
import Header from './header';
import ToForm from './toform';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toform: "",
      date: "",
      html: "",
    }
  }

  componentDidMount() {
    User.checkloginstatus();
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
