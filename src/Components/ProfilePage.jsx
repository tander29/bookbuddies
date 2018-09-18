import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Login from './Login'
import Register from './Register'
import { Image, Container } from "semantic-ui-react";
import SearchBar from "./SearchBar"



import BookShelf from './BookShelf.jsx'


class ProfilePage extends React.Component {
    render() {
        return (

            <div>Profile page</div>


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
)(ProfilePage);
export default Connect;