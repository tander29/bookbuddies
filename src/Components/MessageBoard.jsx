import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Messages from './Messages'
import { connect } from "react-redux";


class MessageBoard extends Component {
  state = {
    messages: []
  };

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

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {};
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard);
export default Connect;
