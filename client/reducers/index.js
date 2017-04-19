/* @flow */

import { combineReducers } from 'redux';
import * as actionTypes from '../constants/ActionTypes';

export function storeToken(state: string = 'no token set', action: Object) {
  switch (action.type) {
    case actionTypes.STORE_TOKEN:
      return action.token;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  storeToken,
});

export default rootReducer;
