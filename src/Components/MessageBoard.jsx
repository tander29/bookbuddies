import React, { Component } from "react";
import { Container, Button, Menu } from "semantic-ui-react";
import Messages from './Messages'
import { connect } from "react-redux";

class MessageBoard extends React.Component {
state = {
  renderMessages: true
}
  
  userMessages() {
    const myMessages = this.props.messages.filter(myMessage => {
      return myMessage.touserid === this.props.userId;
    });
    if (myMessages.length === 0) {
      return <div>You have no messages yet!</div>;
    } else {
      return myMessages.map(message => {
        return (
          <Messages
            messageFrom={message.fromuserid}
            timestamp={message.createdAt}
            text={message.text}
            key={message.id}
          />
        );
      });
    }
  }

  sentMessages() {
    const sentMessages = this.props.messages.filter(sentMessage => {
      return sentMessage.fromuserid === this.props.userId
    })
    if (sentMessages.length === 0) {
      return (
        <div>
          You haven't sent any messages yet!
        </div>
      )
    } else {
      return sentMessages.map(message => {
        return (
          <Messages
            messageFrom={message.fromuserid}
            timestamp={message.createdAt}
            text={message.text}
          />
        )
      })
    }
  }

  whichMessages() {
    if(this.state.renderMessages === true) {
      console.log("renderMessages: ", this.state.renderMessages)
      return this.userMessages()
    } else {
      console.log("renderMessages: ", this.state.renderMessages)
      return this.sentMessages()
    }
  }
  
  renderUserMessages() {
    this.setState({renderMessages: true})
  }

  renderSentMessages() {
    this.setState({renderMessages: false})
  }

  render() {
    return (
      <React.Fragment>
        <Container textAlign='center'>
        <Menu secondary>
          <Menu.Item>
            <Button
              name="myMessages"
              onClick={() => this.renderUserMessages()}
              style={{ backgroundColor: "#86C232", color: "white" }}
            >
              My Messages
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button 
              name="sentMessages"
              onClick={() => this.renderSentMessages()}
              style={{ backgroundColor: "#86C232", color: "white" }}
            >
              Sent Messages
            </Button>
          </Menu.Item>
        </Menu>
        </Container>
        <Container fluid>
          {this.whichMessages()}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.allMessages,
    userId: state.userInfo.id,
    allUsers: state.allUsers
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard);
export default Connect;
