import React, { Component } from "react";
import { connect } from "react-redux";
import Messages from "./Messages";

class MessageBoard extends Component {
  state = {
    messages: []
  };

  render() {
    return (
      <React.Fragment>
        <Messages />
        <Messages />
        <Messages />
      </React.Fragment>
    );
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
