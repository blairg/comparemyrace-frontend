// @flow

import React from 'react';

import './AthleteSearch.scss';

export default class AthleteSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {athleteId: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({athleteId: event.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      //@todo: Fire off to a back end event.
    }

    render() {
        return <div>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="athleteSearchBox">Search For Athlete</label>
                  <input type="text" key="athleteSearchBox" value={this.state.athleteId}
                         onChange={this.handleChange} className="athleteSearchBox" />
                  <br />
                  <button type="submit">Search</button>
                </form>
               </div>;
    }
}
