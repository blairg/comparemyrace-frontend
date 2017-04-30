import axios from 'axios';
import Promise from 'promise';
import * as localStorageTypes from '../constants/LocalStorageTypes';
import Config from '../../config';

const envVars = Config.get(process.env.ENV);

export const getAthlete = new Promise((accessCode: string) => {
  axios.get(`${envVars.accessTokenUrl}${accessCode}`)
      .then((result) => {
        const accessToken = result.data.access_token;

          /*this.setState(
            { accessToken,
              athleteDetails: result.data.athlete,
            }
          );*/

        console.log('setting local storage: ' + accessToken);
        localStorage.setItem(localStorageTypes.TOKEN, accessToken);

        return accessToken;

          // @todo: Persist AthleteDetails in Redux store??
          //this.props.storeToken(result.data.access_token);
      }).catch((error) => {
        console.log(error);
      })
});
