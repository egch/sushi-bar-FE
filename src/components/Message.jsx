import React, { Component } from 'react';

import { Alert } from "react-bootstrap"

export default class Message extends Component {
    render() {
        return (
            <div>
                <Alert bsStyle="success">
                    {this.props.match.params.message}
                </Alert>
            </div>
        );
    }
}

