import React, { Component } from "react";
import { Button, Menu, Icon, Modal } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import AddBook from "./AddBook";
import { logout } from "../Redux/Actions/ActLogout";
import { to_main, to_profile } from "../Redux/Actions/ActNavBar";
import { connect } from "react-redux";

export class NavBar extends Component {
  render() {
    return (
      <Menu
        style={{ backgroundColor: "#474B4F", margin: "0" }}
        className="stickyMenu"
        fluid
      >
        <Menu.Menu>
          <Menu.Item>
            <Button
              onClick={this.props.to_profile}
              style={{ backgroundColor: "#86C232", color: "white" }}
            >
              Profile
            </Button>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item>
            <Button
              onClick={this.props.to_main}
              style={{ backgroundColor: "#86C232", color: "white" }}
            >
              Main Page
            </Button>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item>
            <Modal
              trigger={
                <Button style={{ backgroundColor: "#86C232", color: "white" }}>
                  <Icon name="plus" corner />
                  Add Book
                </Button>
              }
              closeIcon
            >
              <AddBook />
            </Modal>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu style={{ margin: "auto" }}>
          <SearchBar />
          <Icon name="search" />
        </Menu.Menu>

        <Menu.Item position="right">
          <Button
            onClick={this.props.logout}
            style={{ backgroundColor: "#86C232", color: "white" }}
          >
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    logout: {},
    to_profile: {},
    to_main: {}
  };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
    to_profile: () => {
      dispatch(to_profile());
    },
    to_main: () => {
      dispatch(to_main());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
export default Connect;
