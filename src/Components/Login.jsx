import React, { Component } from "react";
import { Container, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { login } from "../Redux/Actions/ActLoginRegister";

const initialState = {
  username: "",
  password: ""
};
class Login extends Component {
  state = {
    ...initialState
  };

  handleSubmit = () => {
    this.props.login(this.state.username, this.state.password);
    this.setState({ ...initialState });
  };

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEnter = event => {
    if (event.key === "Enter") {
      // this.props.xmlTest()
      // this.handleSubmit()
    }
  };

  render() {
    return (
      <Container textAlign="center">
        <Form style={{ padding: "1vh", backgroundColor: "#474B4F" }}>
          <p className="loginHeader">
            <b>Login</b>
          </p>

          <Form.Input
            autoFocus={true}
            className="username"
            placeholder="Username"
            autoComplete="username"
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.updateInput}
          />
          <Form.Input
            className="password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            value={this.state.password}
            name="password"
            onChange={this.updateInput}
            onKeyPress={this.handleEnter}
          />

          <Form.Button
            className="submit"
            style={{ backgroundColor: "#86C232", color: "white" }}
            onClick={this.handleSubmit}
          >
            Submit
          </Form.Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    }
  };
}
const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
export default Connect;
