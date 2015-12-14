import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, Link} from 'react-router';

import App from './components/app';
import Hero from './components/hero';
import Login from './components/login';
import Register from './components/register';
import ToForm from './components/toform';

let NotFound = () => {
  return (
    <div className="wrapper">
      <h1 className="error">
        404 ERROR: There is nothing here for you!
      </h1>
      <Link to="/">Start over.</Link>
    </div>
  )
}

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Hero} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="toform" component={ToForm} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('app'));
