import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar.jsx";
import { Grid } from "semantic-ui-react";
import BookShelf from "./BookShelf";

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Grid celled="internally">
          <Grid.Column width={3}>
            <h1>Profile</h1>
            <div>Name: Sloth</div>
            <div>Rating: 5 Stars!</div>
            <div>Bio: I am a sloth</div>
          </Grid.Column>
          <Grid.Column width={10}>
            <Grid.Row>Search for Books!!</Grid.Row>
            <BookShelf />
          </Grid.Column>
          <Grid.Column width={3}>
            <Footer />
          </Grid.Column>
        </Grid>
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
)(MainPage);
export default Connect;
