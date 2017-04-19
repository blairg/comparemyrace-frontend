// @flow
import React from 'react';
import { connect } from 'react-redux';
import { storeToken } from '../actions';
import * as localStorageTypes from '../constants/LocalStorageTypes';

type Props = {
  location: Object,
  storeToken: Function
}

class TokenExchange extends React.Component {
  constructor(props: Props) {
    super(props);

    const query = props.location.query;

    if (this.checkAccessCode(query)) {
      let accessToken = '';

      // @todo: abstract this and Bluebird promisefy
      fetch('http://localhost:3000/token/' + props.location.query.code)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then(function(data) {
            accessToken = data.access_token;
            console.log(accessToken);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

      console.log(accessToken);

      this.state = {
        token: accessToken,
      };

      localStorage.setItem(localStorageTypes.TOKEN, this.state.token);

      console.log('added to local storage');

      this.props.storeToken(this.state.token);
    } else {
      this.state = {
        token: 'Not found!',
      };

      this.props.storeToken('Not found!');
    }
  }

  state: {
    token: string
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
      access token: {this.state.token}
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
