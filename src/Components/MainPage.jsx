import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar.jsx";
import { Grid, Icon } from "semantic-ui-react";
import BookShelf from "./BookShelf";
import { SearchBar } from "./SearchBar";
import { logout } from "../Redux/Actions/ActLogout";

class MainPage extends React.Component {
  componentDidMount() {
    if (!this.props.userInfo.loginSuccess) {
      this.props.logout();
    }
  }

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
          <Grid.Column width={10} centered>
            <div>
              <SearchBar />
              <Icon name="search" />
            </div>
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
  return { ...state };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
export default Connect;
