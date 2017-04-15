// @flow
import React from 'react';
import { connect } from 'react-redux';
import { storeToken } from '../actions';

type Props = {
  location: Object,
  storeToken: Function
}

class TokenExchange extends React.Component {
  constructor(props: Props) {
    super(props);

    console.log(props.location.query.code);

    this.state = {
      token: props.location.query.code,
    };

    this.props.storeToken(this.state.token);
  }

  state: {
    token: string
  };

  render = () => (
    <div>
      access token: {this.state.token}
    </div>
        )
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
