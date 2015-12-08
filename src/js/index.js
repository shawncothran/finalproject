import React from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';

render((
  <Router>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'));
