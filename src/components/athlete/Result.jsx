// @flow
import React from 'react';

export default class Result extends React.Component {
  state: {}
  props: {
      showResults: string,
      name: string,
      profile: string
  };

  render() {
    return (
      <div className={this.props.showResults}>
        <span>Name: {this.props.name}</span>
        <br />
        <span><img src={this.props.profile} alt="athlete profile" /></span>
      </div>
    );
  }
}
