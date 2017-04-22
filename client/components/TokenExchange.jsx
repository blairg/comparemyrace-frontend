// @flow
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { storeToken } from '../actions';
import * as localStorageTypes from '../constants/LocalStorageTypes';
import PersonalDetails from '../containers/athlete/PersonalDetails';
import Config from '../../config';

const envVars = Config.get(process.env.ENV);

type Props = {
  location: Object,
  storeToken: Function
}

class TokenExchange extends React.Component {
  constructor(props: Props) {
    super(props);

    const query = props.location.query;

    if (this.checkAccessCode(query)) {
      this.state = {
        accessCode: query.code,
        accessToken: '',
        athleteDetails: {}
      };
    }
  }

  state: {
    accessCode: string,
    accessToken: string,
    athleteDetails: Object,
  };

  componentDidMount = () => {
    // @todo: Move to config
    axios.get(`${envVars.accessTokenUrl}${this.state.accessCode}`)
      .then(result => {
        this.setState({ accessToken: result.data.access_token,
          athleteDetails: result.data.athlete });
        // @todo: Persist AthleteDetails in Redux store??
        this.props.storeToken(result.data.access_token);
      }).catch(error => {
        console.log(error);
      });
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

  render = () => (
    <div>
      <PersonalDetails athleteDetails={this.state.athleteDetails} />
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  storeToken: (token) => {
    dispatch(storeToken(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TokenExchange);
