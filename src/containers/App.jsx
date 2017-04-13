import React from 'react';

import './App.scss';

type Props = {
  stravaUrl: string
}

const App = ({ stravaUrl } : Props) => (
  <div>
    <a href={stravaUrl}>login</a>
  </div>
);

export default App;
