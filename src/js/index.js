import React from 'react';
import { render } from 'react-dom';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';

import App from './components/app';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import ToForm from './components/toform';
import Subscription from './components/subscription';
import CardCreator from './components/cardcreator';
import Success from './components/success';
import Get from './components/get';

let NotFound = () => {
  return (
    <div className="wrapper">
      <h1 className="error">
        404 ERROR: There is nothing here for you!
      </h1>
      <Link className="anchor" to="/">Start over.</Link>
    </div>
  )
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="dashboard" component={Dashboard}>
        <IndexRoute component={CardCreator}/>
      </Route>
      <Route path="/success" component={Success}/>
      <Route path="toform" component={ToForm} />
      <Route path="subscription" component={Subscription} />
    </Route>
    <Route path="get" component={Get} />
    <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('app'));
