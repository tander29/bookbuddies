import React, { Component } from "react";
import { Container, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { login } from '../Redux/Actions/ActLoginRegister'

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
            <Container textAlign='center'>
            <Form style={{ padding: '2vh', backgroundColor:'#474B4F' }}>
                <p className="loginheader" style={{ color:'#61892F' }}><b>Login</b></p>
                <Form.Input
                    autoFocus={true}
                    className="username"
                    placeholder="Username"
                    type="text"
                    value={this.state.username}
                    name="username"
                    onChange={this.updateUsername}
                />
                <Form.Input
                    className="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.updatePassword}
                    onKeyPress={this.handleEnter}
                />
                <Form.Button className="submit" style={{backgroundColor:'#86C232', color:'white' }} onClick={this.handleSubmit}>Submit</Form.Button>
            </Form>
            </Container>
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