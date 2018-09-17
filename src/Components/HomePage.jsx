// when making a new component, every component needs to import react and connect, to properly make component and connect to redux store
import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import { Image, Container } from "semantic-ui-react";

import { Login, Register } from "./Authorization"
import SearchBar from "./SearchBar"



import BookShelf from './BookShelf.jsx'


class HomePage extends React.Component {
    render() {
        return (

 <React.Fragment>
        <Container>
            <Header></Header>
          <BookShelf></BookShelf>
              <Login />
                <Register />
                <SearchBar />
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