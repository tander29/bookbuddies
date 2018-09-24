import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

class Messages extends Component {
    render() {
        return(
            <React.Fragment>
                <Card className="messages" >
                    <div>Name of Sender</div>
                    <div>Time Stamp</div>
                    <div>Message Content</div>
                </Card>
            </React.Fragment>
        )
    }
}

export default Messages