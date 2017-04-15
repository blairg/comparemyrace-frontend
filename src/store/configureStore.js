/* eslint-disable */
import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return {
    ...createStore(rootReducer, composeEnhancers(
    )),
  };
}
