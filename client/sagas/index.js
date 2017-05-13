import 'babel-polyfill';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { storeToken, storeAthlete } from '../actions';
import * as actionTypes from '../constants/ActionTypes';
import Config from '../../config';

const envVars = Config.get(process.env.ENV);

function getToken(accessCodeState: string) {
  if (!accessCodeState) {
    return null;
  }

  let tokenData;

  return axios.get(`${envVars.accessTokenUrl}${accessCodeState.accessCode}`)
    .then((result) => {
      tokenData = result.data;
      return tokenData;
    }).catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    });
}

export function* fetchToken(accessCode: string) : Generator<*, *, *> {
  const tokenData = yield call(getToken, accessCode);

  if (tokenData != null) {
    yield put(storeToken(tokenData.access_token));
    yield put(storeAthlete(tokenData.athlete));
  }
}

export default function* rootSaga() : Generator<*, *, *> {
  yield takeLatest(actionTypes.STORE_ACCESS_CODE, fetchToken);
}
