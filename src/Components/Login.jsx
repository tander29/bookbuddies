import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleSubmit = () => {
        console.log("Hey, you hit the Submit button!")
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
            <Card style={{ padding: '1vh' }} fluid >
                <Card.Header className="loginheader" textAlign='center'><b>Login</b></Card.Header>
                <input
                    autoFocus={true}
                    className="username"
                    placeholder="Username"
                    type="text"
                    value={this.state.username}
                    name="username"
                    onChange={this.updateUsername}
                />
                <input
                    className="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.updatePassword}
                    onKeyPress={this.handleEnter}
                />
                <button className="submit" onClick={this.handleSubmit} >Submit</button>
            </Card>
        )
    }
}



const mapStateToProps = state => {
    return {}
};

function mapDispatchToProps(dispatch) {
    return {}

}
const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
export default Connect;