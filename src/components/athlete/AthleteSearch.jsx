// @flow
import React from 'react';

import type InputEvent from '../../types/InputEvent';

import './AthleteSearch.scss';

type Props = {};

export default class AthleteSearch extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { athleteId: '', name: '', profile: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state: {
    athleteId: string,
    name: string,
    profile: string
  }

  props: Props;

  handleChange: () => void;
  handleSubmit: () => void;

  handleChange = (event: InputEvent) => {
    this.setState({ athleteId: event.target.value });
  };

  handleSubmit = (event: InputEvent) => {
    event.preventDefault();
    // @todo: Fire off to a back end event.
    // console.log(this.state.athleteId);

    let name = '';
    let profile = '';

    if (this.state.athleteId === '973583') {
      name = 'Blair Garrett';
      profile = 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/973583/632217/4/large.jpg';
    } else {
      name = 'Athlete not found!';
    }

    this.setState({ name, profile });
  };

  render = () => {
    const showResults = (this.state.name === '') ? 'as-searchResults' : '';

    return (<div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="athleteSearchBox">
          Search For Athlete
        </label>
        <input
          type="text"
          key="athleteSearchBox"
          value={this.state.athleteId}
          onChange={this.handleChange}
          className="as-athleteSearchBox"
        />
        <br />
        <button type="submit">Search</button>
      </form>
      <div className={showResults}>
        <span>Name: {this.state.name}</span>
        <br />
        <span><img src={this.state.profile} alt="athlete profile" /></span>
      </div>
    </div>);
  };
}
