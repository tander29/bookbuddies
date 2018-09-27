import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Messages from './Messages'

class MessageBoard extends Component {
    state = {
        messages: [
            {
                name: 'Patrick H.',
                timestamp: 'yesterday',
                content: 'Hey guys I am awesome'
            },
            {
                name: 'Travis A.',
                timestamp: 'a week ago',
                content: 'Hey I heard Patrick was awesome'
            },
            {
                name: 'Nerd',
                timestamp: 'two days ago',
                content: 'I love books!'
            }
        ]
    }

    render() {
        return(
            <React.Fragment>
                <Messages />
                <Messages />
                <Messages />
            </React.Fragment>
        )
    }
}

export default MessageBoard