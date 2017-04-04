// @flow
import React from 'react';
import Config from '../../../config';

const envVars = Config.get(process.env.ENV);

export default class Login extends React.Component {
    constructor() {
        super();
    }

    render = () => {
        return (
            <div>
                <a href={envVars.stravaUrl}>login</a>
            </div>);
    }
}
