import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  Button,
  Modal,
  Image,
  Icon,
  Card,
  Menu,
  Segment,
  Rating
} from "semantic-ui-react";

import Header from "./Header";
import Footer from "./Footer";
import bookbuddyicon from "../images/bookbuddyicon.png";
import NavBar from "./NavBar.jsx";
import BookShelf from "./BookShelf.jsx";
import "../App.css";
import MessageBoard from "./MessageBoard.jsx";
import { Switch, Route, Link } from "react-router-dom";
import { getAllMessages } from "../Redux/Actions/ActSendMessage";
import { getAllBooks } from "../Redux/Actions/ActBooks";
import {
  patchInfo,
  getMyUser,
  getAllUsers
} from "../Redux/Actions/ActLoginRegister";
import { logout } from "../Redux/Actions/ActLogout";

class ProfilePage extends React.Component {
  state = {
    messageContent: null,
    modalOpen: false,
    name: "",
    username: "",
    about: "",
    location: "",
    password: "",
    password2: ""
  };

  componentDidMount() {
    this.props.getAllMessages();
    this.props.getAllBooks();
    this.props.getAllUsers();
    if (!this.props.userInfo.loginSuccess) {
      this.props.logout();
    }
  }

  modalSwitchStatus = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleItemClick = () => {
    window.location.reload(true);
  };

  changeInfo = () => {
    if (this.state.password === this.state.password2)
      this.props.patchInfo(
        this.state.username,
        this.state.password,
        this.state.about,
        this.props.userInfo.id,
        this.state.location
      );
  };

  Owned = () => {
    return (
      <div>
        This is the books you own.
        <BookShelf />
      </div>
    );
  };

  Available = () => {
    return (
      <div>
        These are the books you have available.
        <BookShelf />
      </div>
    );
  };

  Onloan = () => {
    return (
      <div>
        And these are your books other users are reading.
        <BookShelf />
      </div>
    );
  };

  render() {
    const { modalOpen } = this.state;
    const { username, displayname, about } = this.props.userInfo;
    return (
      <div id="profilepage">
        <Header />
        <NavBar />
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Card>
                <Image src={bookbuddyicon} />
                <Card.Content>
                  <Card.Header>{username}</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2018</span>
                  </Card.Meta>
                  <Card.Description>{about}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <div id="menubar">
                <Menu id="Switchbar">
                  <Menu.Item
                    name="Owned"
                    // active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                  >
                    <Link to="/bookbuddy/profile/">Owned</Link>

                  </Menu.Item>

                  <Menu.Item
                    name="Currently Have"
                    //  active={activeItem === 'reviews'}
                    onClick={this.handleItemClick}
                  >
                    <Link to="/bookbuddy/profile/available">Available</Link>
                  </Menu.Item>

                  <Menu.Item
                    name="Messages"
                    // active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                  >
                    <Link to="/bookbuddy/profile/onloan">On Loan</Link>
                  </Menu.Item>
                </Menu>
              </div>
              <Switch>
                <Route
                  exact
                  path="/bookbuddy/profile/"
                  component={this.Owned}
                />
                <Route
                  exact
                  path="/bookbuddy/profile/available"
                  component={this.Available}
                />
                <Route
                  exact
                  path="/bookbuddy/profile/onloan"
                  component={this.Onloan}
                />
              </Switch>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Segment vertical>Username: {username}</Segment>
              <Segment vertical>Location: USA</Segment>
              <Segment vertical>
                Bio:
                {about || " I am such a book worm"}
              </Segment>
              <div id="ratingbox">
                <Modal
                  closeIcon
                  open={modalOpen}
                  onClose={this.modalSwitchStatus}
                  trigger={
                    <Button onClick={this.modalSwitchStatus}>
                      Update Info
                    </Button>
                  }
                >
                  <Modal.Header>Update Your Info</Modal.Header>
                  <Modal.Content image>
                    <Modal.Description>
                      <Header>Profile Info:</Header>

                      <Segment vertical>
                        UserName:
                        {username}
                        <input onChange={this.handleChange} name="username" />
                      </Segment>
                      <Segment vertical>
                        Password:{" "}
                        <input
                          type="password"
                          onChange={this.handleChange}
                          name="password"
                        />
                      </Segment>
                      <Segment vertical>
                        Password Confirm:{" "}
                        <input
                          type="password"
                          onChange={this.handleChange}
                          name="password2"
                        />
                      </Segment>
                      <Segment vertical>
                        About:
                        {about}
                        <input onChange={this.handleChange} name="about" />
                      </Segment>
                    </Modal.Description>
                  </Modal.Content>
                  <button onClick={this.modalSwitchStatus}>Close</button>
                  
                </Modal>

                <Rating
                  id="rating"
                  icon="star"
                  size="large"
                  defaultRating={5}
                  maxRating={5}
                />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <div id="feed">
                <MessageBoard />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

function mapDispatchToProps(dispatch) {
  return {
    getAllMessages: () => {
      dispatch(getAllMessages());
    },
    getAllBooks: () => {
      dispatch(getAllBooks());
    },
    patchInfo: (username, password, about, id) => {
      dispatch(patchInfo(username, password, about, id));
    },
    getMyUser: id => {
      dispatch(getMyUser(id));
    },
    getAllUsers: id => {
      dispatch(getAllUsers());
    },
    logout: () => {
      dispatch(logout());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
export default Connect;
