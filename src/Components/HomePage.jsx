// when making a new component, every component needs to import react and connect, to properly make component and connect to redux store
import React from "react";
import { connect } from "react-redux";
import BookBuddiesinfo from "../images/BookBuddiesinfo.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";

import { Container, Modal, Grid, Button, Image } from "semantic-ui-react";

class HomePage extends React.Component {
  render() {
    return (
      <Container
        style={{ backgroundColor: "#474B4F" }}
        fluid
        id="homepagecontainer"
      >
        <Header />

        <Container fluid>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column id="homepageinfo">
                <Image className="homePicture" src={BookBuddiesinfo} />
              </Grid.Column>

              <Grid.Column
                id="divider"
                textAlign="center"
                className="loginRegister"
              >
                <Modal
                  size="tiny"
                  trigger={
                    <Button
                      style={{
                        backgroundColor: "#86C232",
                        color: "white",
                        marginBottom: "5vh"
                      }}
                    >
                      Login
                    </Button>
                  }
                  closeIcon
                >
                  <Login />
                </Modal>

                <Register />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

function mapDispatchToProps(dispatch) {
  return {};
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
export default Connect;
