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

class ProfilePage extends React.Component {
  state = {
    messageContent: null,
    modalOpen: false,
    name: "",
    username: "",
    about: "",
    password: "",
    password2: ""
  };

  componentDidMount() {
    setTimeout(this.props.getMyUser(this.props.userInfo.id), 200);

    if (this.props.allMessages.length < 1) {
      this.props.getAllMessages();
    }
    if (this.props.books.length < 1) {
      this.props.getAllBooks();
    }
    if (this.props.allUsers.length < 1) {
      this.props.getAllUsers();
    }
  }

  modalSwitchStatus = () => {
    console.log(this.state.modalOpen);
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
        this.props.userInfo.id
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
                    <span className="date">Joined in 2015</span>
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
                    <Link to="/bookbuddy/profile/owned">Owned</Link>
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
                  path="/bookbuddy/profile/owned"
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
              <Segment vertical>{displayname}</Segment>
              <Segment vertical>
                Location:
                {this.state.location}
              </Segment>
              <Segment vertical>
                Bio:
                {about}
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
                      <Segment vertical>
                        Rating:
                        <Rating
                          id="rating"
                          icon="star"
                          size="large"
                          defaultRating={0}
                          maxRating={5}
                        />
                      </Segment>
                    </Modal.Description>
                  </Modal.Content>
                  <button onClick={this.modalSwitchStatus}>Close</button>
                  <button onClick={this.changeInfo}>Update</button>
                </Modal>

                <Rating
                  id="rating"
                  icon="star"
                  size="large"
                  defaultRating={0}
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
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
export default Connect;
