// @flow
import React from 'react';

export default class TokenExchange extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div>
                access token: {this.props.location.query.code}
            </div>
        );
    }
}
