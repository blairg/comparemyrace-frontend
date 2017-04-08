// @flow

import React from 'react';
import Config from '../../config';

const envVars = Config.get(process.env.ENV);

export default class Login extends React.Component {
  render = () => (
    <div>
      <a href={envVars.stravaUrl}>login</a>
    </div>)
}
