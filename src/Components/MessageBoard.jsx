import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Messages from './Messages'

class MessageBoard extends Component {
    state = {
        messages: []
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