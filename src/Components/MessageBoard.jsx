import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Messages from './Messages'
import { connect } from "react-redux";


class MessageBoard extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    if(this.props.allMessages) {
      this.setState({ messages: this.props.allMessages })
    }
  }

  userMessages() {
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

    render() {
        return(
            <Container fluid>
                {this.userMessages()}
            </Container>
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
