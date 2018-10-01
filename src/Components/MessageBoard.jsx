import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Messages from './Messages'
import { connect } from "react-redux";


class MessageBoard extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    console.log("allMessages:", this.props.allMessages)
    if(this.props.allMessages) {
      this.setState({ messages: this.props.allMessages })
    }
  }

  userMessages() {
    if(this.state.messages.length === 0) {
      return(
        <div>
          You have no messages yet!
        </div>
      )
    } else {
      return this.state.messages.map(message => {
        return(
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
        return(
            <React.Fragment>
              <Container fluid>
                  {this.userMessages()}
              </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
  return { allMessages: state.messages };
};

function mapDispatchToProps(dispatch) {
  return {};
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard);
export default Connect;
