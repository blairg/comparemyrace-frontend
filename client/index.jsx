import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import './styles/react-spinner.scss';
import * as localStorageTypes from './constants/LocalStorageTypes';
import App from './containers/App';
import configureStore from './store/configureStore';
import TokenExchange from './components/TokenExchange';
import Config from '../config';

const envVars = Config.get(process.env.ENV);

const store = configureStore();

const app = document.createElement('div');
document.body.appendChild(app);

const loginFunction = () => {
  if (sessionStorage.getItem(localStorageTypes.TOKEN)) {
    // console.log('found in local storage');
    // window.location.href = envVars.accessCodeUrl;
    browserHistory.push('/token_exchange');
  }

  // eslint-disable-next-line
  console.log(`clicked my button - ${envVars.accessCodeUrl}`);
  window.location.href = envVars.accessCodeUrl;
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={() => <App stravaLogin={loginFunction} />} />
      <Route path="/token_exchange" component={TokenExchange} />
    </Router>
  </Provider>,
  app,
);
