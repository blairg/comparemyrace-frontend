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
      this.state = {
        token: props.location.query.code,
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
