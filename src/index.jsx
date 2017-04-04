import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Login from './components/login/Login';
import TokenExchange from './components/login/TokenExchange';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/token_exchange" component={TokenExchange} />
  </Router>
), app);
