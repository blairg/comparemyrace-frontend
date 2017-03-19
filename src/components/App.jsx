import React from 'react';
import AthleteSearch from './athleteSearch/AthleteSearch';

import './App.scss';

type Props = {};

export default class App extends React.Component {
  state: {};
  props: Props;

  render() {
    return <AthleteSearch />;
  }
}
