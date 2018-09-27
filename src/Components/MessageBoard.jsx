import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Messages from './Messages'

class MessageBoard extends Component {
    state = {
        messages: []
    }

    render() {
        return(
            <Container fluid>
                <Messages />
                <Messages />
                <Messages />
            </Container>
        )
    }
}

export default MessageBoard