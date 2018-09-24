import React, { Component } from "react";
import { Card, Form, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { register } from '../Redux/ActLoginRegister'

class Register extends Component {
    state = {
        displayName: "",
        username: "",
        password: "",
        reenterPassword: ""
    }

    handleSubmit = () => {
        console.log("Hey, you clicked the Submit button!")
        if (!this.state.password) { return }
        console.log("the password field is not blank/false!")

        if (this.state.password === this.state.reenterPassword) {
            console.log("the password and reenter pass equal each other")
            this.props.register(this.state.displayName, this.state.username, this.state.password)
            return
        }
        console.log("!!!! the password and reenter pass do not equal each other")
    }

    updateDisplayName = (event) => {
        this.setState({
            displayName: event.target.value
        })
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

    updateReenterPassword = (event) => {
        this.setState({
            reenterPassword: event.target.value
        })
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            console.log("Hey, you hit the Enter key!")
        }
    }

    render() {
        return (
            <Form style={{ padding: '1vh' }}>
                <p className="profileHeader" style={{ color:'#61892F' }}><b>STILL NEED AN ACCOUNT? &ensp; SIGN UP BELOW.</b></p>
                <Form.Input

                    className="displayName"
                    placeholder="Display Name"
                    type="text"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.updateDisplayName}
                />
                <Form.Input
                    className="username"
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.updateUsername}
                />
                <Form.Input
                    className="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.updatePassword}
                />
                <Form.Input
                    className="reenterPassword"
                    placeholder="Re-Enter Password"
                    type="password"
                    name="reenterPassword"
                    value={this.state.reenterPassword}
                    onChange={this.updateReenterPassword}
                    onKeyPress={this.handleEnter}
                />
                <Form.Button style={{ backgroundColor:'#86C232', color:'white' }} className="submit" onClick={this.handleSubmit} >Sign Up</Form.Button>
            </Form>
        );
    }
}


const mapStateToProps = state => {
    return {}
};

function mapDispatchToProps(dispatch) {
    return {
        register: (displayname, username, password) => {
            dispatch(register(displayname, username, password))
        }
    }

}
const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
export default Connect;