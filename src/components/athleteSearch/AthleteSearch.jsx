// @flow

import React from 'react';

import type {InputEvent} from '../../types/InputEvent.js';

import './AthleteSearch.scss';

type Props = {};

export default class AthleteSearch extends React.Component {
  props: Props;

  state: {
      athleteId: string;
  };

  handleChange: () => void;
  handleSubmit: () => void;

  constructor(props: Props) {
    super(props);
    this.state = {athleteId: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event: InputEvent) => {
    this.setState({athleteId: event.target.value});
  };

  handleSubmit = (event: InputEvent) => {
    event.preventDefault();
    //@todo: Fire off to a back end event.
    console.log(this.state.athleteId);
  };

  render = () => {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="athleteSearchBox">
          Search For Athlete
        </label>
        <input
          type="text"
          key="athleteSearchBox"
          value={this.state.athleteId}
          onChange={this.handleChange}
          className="athleteSearchBox" />
        <br />
        <button type="submit">Search</button>
      </form>
    </div>;
  };
}
