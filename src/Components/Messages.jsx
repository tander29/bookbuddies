import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Grid,
  Button,
  Modal,
  Divider,
  Container
} from "semantic-ui-react";
import { sendMessage } from "../Redux/Actions/ActSendMessage";

class Messages extends Component {
  handleEnter = event => {
    if (event.key === "Enter") {
      console.log("Message sent...hopefully");
    }
  };

  timeConversion = (messageTime) => {
    let time = new Date(messageTime)
    return time.toLocaleString()
  }

  findUsername = (userId) => {
    const senderUsername = this.props.allUsers.find(sender => {
      return sender.id === userId
    })
    console.log("sender findUsername ", senderUsername)
    if(senderUsername.username) {
      return senderUsername.username
    } else {
      return "Sneakster"
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Container>
          <Card
            className="messages"
            style={{ padding: "2vh", backgroundColor: "#474B4F", color: 'white', margin:'1vh' }}
            fluid
          >
            <Grid centered>
              <Grid.Row columns={2}>
                <Grid.Column textAlign="left">
                  From: &nbsp;
                  {this.findUsername(this.props.messageFrom)}
                </Grid.Column>
                <Grid.Column textAlign="right">
                  {this.timeConversion(this.props.timestamp)}
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row columns={2}>
                <Grid.Column textAlign="left">
                  {this.props.text}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column textAlign="left" />
                <Grid.Column textAlign="right">
                  <Modal
                    size="tiny"
                    trigger={
                      <Button
                        style={{ backgroundColor: "#86C232", color: "white" }}
                      >
                        Reply
                      </Button>
                    }
                    closeIcon
                  >
                    <div>Reply to Message Sender!</div>
                    <input
                      autoFocus={true}
                      type="text"
                      onKeyDown={this.handleEnter}
                    />
                  </Modal>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allUsers: state.allUsers
  };
};

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: message => {
      dispatch(sendMessage(message));
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
export default Connect;
