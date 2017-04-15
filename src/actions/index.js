import * as actionTypes from '../constants/ActionTypes';

export function storeToken(token) {
  return {
    type: actionTypes.STORE_TOKEN,
    token,
  };
}
