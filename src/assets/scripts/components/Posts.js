import React from 'react';

export default class Posts extends React.Component {
    constructor(props) {
        super(props)

        console.log(props);
    }


    render() {
        return (
            <div className="Hello">
                {this.props.posts.map(post => <div>{post}</div>)}
            </div>

        )
    }
}