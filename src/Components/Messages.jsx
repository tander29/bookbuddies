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
const initialState = {
  id: null,
  bookOwnerID: null,
  messageContent: {
    text: null,
    userId: null,
    fromUserId: null,
    toOwnerId: null
  },
  text: ""
};
class Messages extends Component {
  state = { ...initialState };

  handleEnter = event => {
    if (event.key === "Enter") {
      if (this.state.messageContent) {
        this.props.sendMessage(this.state.messageContent);
        this.setState({ messageContent: null });
      }
    }
  };

  timeConversion = messageTime => {
    let time = new Date(messageTime);
    return time.toLocaleString();
  };

  findUsername = userId => {
    const senderUsername = this.props.allUsers.filter(sender => {
      return sender.id === userId;
    });

    if (!senderUsername) {
      return "Sneakster";
    }
    if (senderUsername[0].username) {
      return senderUsername[0].username;
    } else {
      return "Sneakster";
    }
  };

  updateMessageContent = event => {
    this.setState({
      messageContent: {
        text: event.target.value,
        fromUserId: this.props.userInfo.id,
        toOwnerId: this.props.messageFrom
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          <Card
            className="messages"
            style={{
              padding: "2vh",
              backgroundColor: "#474B4F",
              color: "white",
              margin: "1vh"
            }}
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
                <Grid.Column textAlign="left">{this.props.text}</Grid.Column>
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
                      onChange={this.updateMessageContent}
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
    ...state,
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
