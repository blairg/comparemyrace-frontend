import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { App } from './containers/App';
import configureStore from './store/configureStore';
import Login from './components/Login';
import TokenExchange from './components/TokenExchange';

const store = configureStore();

const app = document.createElement('div');
document.body.appendChild(app);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/token_exchange" component={TokenExchange} />
    </Router>
  </Provider>,
  app,
);
