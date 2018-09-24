import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import Messages from './Messages'

class MessageBoard extends Component {
    state = {
        messages: []
    }

    render() {
        return(
            <Messages />
        )
    }
}

export default MessageBoard