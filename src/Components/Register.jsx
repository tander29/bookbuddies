import React, { Component } from "react";
import { Form, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { register } from '../Redux/Actions/ActLoginRegister'


const initialState = {
    displayName: "",
    username: "",
    password: "",
    reenterPassword: ""
}
class Register extends Component {


    state = {
        ...initialState
    }



    handleSubmit = () => {

        const { displayName, username, password, reenterPassword } = this.state
        const checkField = [displayName, username, password, reenterPassword]
        const lengthRequired = checkField.filter(item => item.length < 3)

        if (this.lengthofFieldsValid() === false) { return }

        if (password === reenterPassword) {
            console.log("success!")
            this.props.register(displayName, username, password)
            this.setState({ ...initialState })
            return
        } else {
            alert("Passwords don't match!")
            this.setState({ password: "", reenterPassword: "" })
        }
    }

    lengthofFieldsValid = () => {
        const { displayName, username, password, reenterPassword } = this.state
        const checkField = [displayName, username, password, reenterPassword]
        const lengthRequired = checkField.filter(item => item.length < 3)

        if (lengthRequired.length > 0) {
            alert("Please make sure all fields are input fields are longer than 2 characters")
            return false
        }
        return true
    }

    updateUserInput = (event) => {


        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        return (

            <Form style={{ padding: '1vh', margin: 'auto' }}>
                <p className="profileHeader" style={{ color:'#61892F', textAlign:'center' }}><b>STILL NEED AN ACCOUNT? &ensp; SIGN UP BELOW.</b></p>

                <Form.Input

                    className="displayName"
                    placeholder="Display Name"
                    type="text"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.updateUserInput}

                />
                <Form.Input
                    className="username"
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.updateUserInput}

                />
                <Form.Input

                    className="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.updateUserInput}

                />
                <Form.Input

                    className="reenterPassword"
                    placeholder="Re-Enter Password"
                    type="password"
                    name="reenterPassword"
                    value={this.state.reenterPassword}
                    onChange={this.updateUserInput}

                />
                <Form.Button style={{ backgroundColor: '#86C232', color: 'white' }} className="submit" onClick={this.handleSubmit} >Sign Up</Form.Button>
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