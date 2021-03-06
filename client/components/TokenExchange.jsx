// @flow

import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import { storeAccessCode, storeToken, storeAthlete } from '../actions';
import * as localStorageTypes from '../constants/LocalStorageTypes';
import PersonalDetails from '../containers/athlete/PersonalDetails';

type Props = {
  location: Object,
  saveAccessCode: Function,
  saveToken: Function,
  saveAthlete: Function,
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

  getSessionStorageValue = (key: string) => sessionStorage.getItem(key);
  accessCode = '';

  setInitialState = () => {
    this.props.saveToken(this.getSessionStorageValue(localStorageTypes.TOKEN));

    const athleteValue = this.getSessionStorageValue(localStorageTypes.ATHLETE);

    if (athleteValue != null) {
      this.props.saveAthlete(JSON.parse(athleteValue));
    }
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  saveAccessCode: (accessCode: string) => {
    dispatch(storeAccessCode(accessCode));
  },
  saveToken: (token: string) => {
    dispatch(storeToken(token));
  },
  saveAthlete: (athlete: Object) => {
    dispatch(storeAthlete(athlete));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TokenExchange);
