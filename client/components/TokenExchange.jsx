// @flow
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import { storeAccessCode, storeToken, storeAthlete } from '../actions';
import * as localStorageTypes from '../constants/LocalStorageTypes';
import PersonalDetails from '../containers/athlete/PersonalDetails';
import Config from '../../config';

const envVars = Config.get(process.env.ENV);

type Props = {
  location: Object,
  saveAccessCode: Function,
  saveToken: Function,
  saveAthlete: Function,
  storeAccessCode: string,
  storeToken: string,
  storeAthlete: Object,
}

class TokenExchange extends React.Component {
  constructor(props: Props) {
    super(props);

    if (!sessionStorage.getItem(localStorageTypes.TOKEN)) {
      const query = props.location.query;

      if (this.checkAccessCode(query)) {
        this.props.saveAccessCode(query.code);
        this.accessCode = query.code;
      }
    } else {
      this.setInitialState();
    }
  }

  state: {
    accessCode: string,
    accessToken: string,
    athlete: Object,
  };

  componentDidMount = () => {
    if (!this.getSessionStorageValue(localStorageTypes.TOKEN)) {
      axios.get(`${envVars.accessTokenUrl}${this.accessCode}`)
        .then((result) => {
          const accessToken = result.data.access_token;
          const athlete = result.data.athlete;

          sessionStorage.setItem(localStorageTypes.TOKEN, accessToken);
          sessionStorage.setItem(localStorageTypes.ATHLETE, JSON.stringify(athlete));
          this.props.saveToken(accessToken);
          this.props.saveAthlete(athlete);
        }).catch((error) => {
          console.log(error);
        });
    } else {
      this.props.saveToken(this.getSessionStorageValue(localStorageTypes.TOKEN));
      this.props.saveAthlete(JSON.parse(this.getSessionStorageValue(localStorageTypes.ATHLETE)));
    }
  };

  getSessionStorageValue = (key: string) => sessionStorage.getItem(key);
  accessCode = '';

  setInitialState = () => {
    this.props.saveToken(this.getSessionStorageValue(localStorageTypes.TOKEN));
    this.props.saveAthlete(JSON.parse(this.getSessionStorageValue(localStorageTypes.ATHLETE)));
  };

  checkAccessCode = (query: Object) => {
    if (!query.code) {
      return false;
    }

    if (query.code !== '') {
      return true;
    }

    return false;
  };

  render() {
    const athlete = this.props.storeAthlete.athlete;
    let display;

    if (athlete === null) {
      display = <Spinner className="react-spinner" />;
    } else {
      display = <PersonalDetails athleteDetails={athlete} />;
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { storeAccessCode, storeToken, storeAthlete } = state;
  return { storeAccessCode, storeToken, storeAthlete };
};

const mapDispatchToProps = dispatch => ({
  saveAccessCode: (accessCode) => {
    dispatch(storeAccessCode(accessCode));
  },
  saveToken: (token) => {
    dispatch(storeToken(token));
  },
  saveAthlete: (athlete) => {
    dispatch(storeAthlete(athlete));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TokenExchange);
