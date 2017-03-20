import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
), app);
