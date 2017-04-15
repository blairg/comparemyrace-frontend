import React from 'react';

import './App.scss';

type Props = {
  stravaUrl: string
}

const App = ({ stravaUrl } : Props) => (
  <div className="login-container">
    <div className="login-heading">Compare My Race</div>
    <div className="login-strava-logo"></div>
    <button className="login-button" id="login-button" type="submit">Log In</button>
    <a href={stravaUrl}>login</a>
  </div>
);

export default App;
