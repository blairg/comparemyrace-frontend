import React from 'react';

import './App.scss';

type Props = {
  stravaLogin: Function
}

const App = ({ stravaLogin } : Props) => (
  <div className="login-container">
    <div className="login-heading">Compare My Race</div>
    <div className="login-strava-logo" />
    <button className="login-button" id="login-button" type="submit" onClick={stravaLogin}>Log In</button>
  </div>
);

export default App;
