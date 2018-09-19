// when making a new component, every component needs to import react and connect, to properly make component and connect to redux store
import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";

import NavBar from "./NavBar";

import Login from './Login'
import Register from './Register'

import { Container, Card, Modal, Divider } from "semantic-ui-react";




import BookShelf from './BookShelf.jsx'


class HomePage extends React.Component {
    render() {
        return (


          

            <React.Fragment>
                <Container>
                    <Header></Header>
                    <NavBar></NavBar>
                    <BookShelf></BookShelf>
                    <Login />
                    <Register />                    
                    <Footer></Footer>
                </Container>
            </React.Fragment>


        );
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
)(HomePage);
export default Connect;