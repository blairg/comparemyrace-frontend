import React from 'react';
import AthleteSearch from './athlete/AthleteSearch';

import './App.scss';

type Props = {};

export default class App extends React.Component {
  state: {};
  props: Props;

  render() {
    return <AthleteSearch />;
  }
}
