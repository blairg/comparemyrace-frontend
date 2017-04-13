import * as actionTypes from '../constants/ActionTypes';

export default function storeToken(token) {
  return {
    type: actionTypes.STORE_TOKEN,
    token,
  };
}
