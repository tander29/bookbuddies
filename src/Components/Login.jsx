import React, { Component } from "react";
import { Card, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { login } from '../Redux/ActLoginRegister'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleSubmit = () => {
        console.log("Hey, you hit the Submit button to Log in!")
        this.props.login(this.state.username, this.state.password)
    }

    updateUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            console.log("Hey, you hit the Enter key!")
        }
    }

    render() {
        return (
            <Form style={{ padding: '1vh', backgroundColor: '#474B4F' }} fluid >
                <p className="loginheader" textAlign='center'><b>Login</b></p>
                <Form.Input
                    autoFocus={true}
                    autocomplete={false}
                    className="username"
                    placeholder="Username"
                    type="text"
                    value={this.state.username}
                    name="username"
                    onChange={this.updateUsername}
                />
                <Form.Input
                    autocomplete={false}
                    className="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.updatePassword}
                    onKeyPress={this.handleEnter}
                />
                <Form.Button className="submit" style={{ backgroundColor: '#86C232' }} onClick={this.handleSubmit}>Submit</Form.Button>
            </Form>
        )
    }
}



const mapStateToProps = state => {
    return {}
};

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => {
            dispatch(login(username, password));

        },
    }
}
const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
export default Connect;