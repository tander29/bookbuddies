// This page is no longer being used, here as a referrence!



// import React, { Component } from "react";
// import { Card } from "semantic-ui-react";
// import "../App.css";

// export class Login extends Component {
//     state = {
//         username: "",
//         password: ""
//     }

//     handleSubmit = () => {
//         console.log("Hey, you hit the Submit button!")
//     }

//     updateUsername = (event) => {
//         this.setState({
//             username: event.target.value
//         })
//     }

//     updatePassword = (event) => {
//         this.setState({
//             password: event.target.value
//         })
//     }

//     handleEnter = (event) => {
//         if (event.key === 'Enter') {
//             console.log("Hey, you hit the Enter key!")
//         }
//     }

//     render() {
//         return (
//             <Card style={{ padding: '1vh' }} fluid >
//                 <header className="loginheader">Login</header>
//                 <input
//                     autoFocus={true}
//                     className="username"
//                     placeholder="Username"
//                     type="text"
//                     value={this.state.username}
//                     name="username"
//                     onChange={this.updateUsername}
//                 />
//                 <input
//                     className="password"
//                     placeholder="Password"
//                     type="password"
//                     value={this.state.password}
//                     name="password"
//                     onChange={this.updatePassword}
//                     onKeyPress={this.handleEnter}
//                 />
//                 <button className="submit" onClick={this.handleSubmit} >Submit</button>
//             </Card>
//         )
//     }
// }

// export class Register extends Component {
//     state = {
//         displayName: "",
//         username: "",
//         password: "",
//         reenterPassword: ""
//     }

//     handleSubmit = () => {
//         console.log("Hey, you clicked the Submit button!")
//     }

//     updateDisplayName = (event) => {
//         this.setState({
//             displayName: event.target.value
//         })
//     }

//     updateUsername = (event) => {
//         this.setState({
//             username: event.target.value
//         })
//     }

//     updatePassword = (event) => {
//         this.setState({
//             password: event.target.value
//         })
//     }

//     updateReenterPassword = (event) => {
//         this.setState({
//             reenterPassword: event.target.value
//         })
//     }

//     handleEnter = (event) => {
//         if (event.key === 'Enter') {
//             console.log("Hey, you hit the Enter key!")
//         }
//     }

//     render() {
//         return (
//             <Card style={{ padding: '1vh' }} fluid >
//                 <Card.Header className="profileHeader">Register</Card.Header>
//                 <input

//                     className="displayName"
//                     placeholder="Display Name"
//                     type="text"
//                     name="displayName"
//                     value={this.state.displayName}
//                     onChange={this.updateDisplayName}
//                 />
//                 <input
//                     className="username"
//                     placeholder="Username"
//                     type="text"
//                     name="username"
//                     value={this.state.username}
//                     onChange={this.updateUsername}
//                 />
//                 <input
//                     className="password"
//                     placeholder="Password"
//                     type="password"
//                     name="password"
//                     value={this.state.password}
//                     onChange={this.updatePassword}
//                 />
//                 <input
//                     className="reenterPassword"
//                     placeholder="ReEnter Password"
//                     type="password"
//                     name="reenterPassword"
//                     value={this.state.reenterPassword}
//                     onChange={this.updateReenterPassword}
//                     onKeyPress={this.handleEnter}
//                 />
//                 <button className="submit" onClick={this.handleSubmit} >Submit</button>
//             </Card>
//         );
//     }
// }
