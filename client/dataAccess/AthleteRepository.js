import axios from 'axios';
import Promise from 'promise';
import * as localStorageTypes from '../constants/LocalStorageTypes';
import Config from '../../config';

const envVars = Config.get(process.env.ENV);

const getAthlete = new Promise((accessCode: string) => {
  axios.get(`${envVars.accessTokenUrl}${accessCode}`)
      .then((result) => {
        const accessToken = result.data.access_token;
        // eslint-disable-next-line
        console.log('setting local storage: ' + accessToken);
        localStorage.setItem(localStorageTypes.TOKEN, accessToken);

        return accessToken;
      }).catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
});

export default { getAthlete };
