/* @flow */

import { combineReducers } from 'redux';
import * as actionTypes from '../constants/ActionTypes';

export function storeAccessCode(state: Object = { accessCode: 'not set' }, action: Object) {
  switch (action.type) {
    case actionTypes.STORE_ACCESS_CODE:
      // eslint-disable-next-line
      console.log('storing');
      return { ...state,
        accessCode: action.accessCode,
      };
    default:
      return state;
  }
}

export function storeToken(state: Object = { token: 'not set' }, action: Object) {
  switch (action.type) {
    case actionTypes.STORE_TOKEN:
      return { ...state,
        token: action.token,
      };
    default:
      return state;
  }
}

export function storeAthlete(state: Object = { athlete: null }, action: Object) {
  switch (action.type) {
    case actionTypes.STORE_ATHLETE:
      return { ...state,
        athlete: action.athlete,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  storeAccessCode,
  storeToken,
  storeAthlete,
});

export default rootReducer;
