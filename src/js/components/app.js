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
      session: {}
    }

  }

  componentDidMount() {
    User.checkLoginStatus();
  }

  render () {
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child)
    })
    // console.log(this.state);

    return (
      <div>
        <Header email={this.state.session.email}/>
        {childrenWithProps}
      </div>
    )
  }
}

export default App;
