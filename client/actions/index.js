import * as actionTypes from '../constants/ActionTypes';

export function storeAccessCode(accessCode) {
  return {
    type: actionTypes.STORE_ACCESS_CODE,
    accessCode,
  };
}

export function storeToken(token) {
  return {
    type: actionTypes.STORE_TOKEN,
    token,
  };
}

export function storeAthlete(athlete) {
  return {
    type: actionTypes.STORE_ATHLETE,
    athlete,
  };
}
