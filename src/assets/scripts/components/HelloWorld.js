'use strict';

import React from 'react';
import Posts from './Posts';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            isShown: false,
            posts: [1, 2, 3, 4]
        };
    }

    _handleClick(event) {
        this.setState({isShown: !this.state.isShown});
    }

    render() {
        return (
            <div className="Hello">
                Hello from the IP of: {this.props.ip}
            </div>

        )
    }
}