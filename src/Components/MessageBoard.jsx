import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Messages from './Messages'
import { connect } from "react-redux";


class MessageBoard extends React.Component {

  userMessages() {
    const myMessages = this.props.messages.filter(myMessage => {
      return myMessage.touserid === this.props.userId
    })
    if (myMessages.length === 0) {
      return (
        <div>
          You have no messages yet!
        </div>
      )
    } else {
      return myMessages.map(message => {
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

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          {this.userMessages()}
        </Container>
      </React.Fragment>
    )
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
