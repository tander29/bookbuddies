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

class Messages extends Component {
  handleEnter = event => {
    if (event.key === "Enter") {
      console.log("Message sent...hopefully");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Card
            className="messages"
            style={{ padding: "1vh", backgroundColor: "#474B4F" }}
            fluid
          >
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column textAlign="left">Message Sender</Grid.Column>
                <Grid.Column textAlign="right">Time Stamp</Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row columns={2}>
                <Grid.Column textAlign="left">Message Content</Grid.Column>
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

export default Messages;
