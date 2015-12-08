import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class App extends React.Component {
  render () {
    return (
      <main>
        <header>
          <h1>Snailephant @c;</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
      </main>
    )
  }
}

export default App;
