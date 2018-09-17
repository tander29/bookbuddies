import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import { Image, Container } from "semantic-ui-react";

import { Login, Register } from "./Authorization"
import SearchBar from "./SearchBar"



class HomePage extends React.Component {
    render() {
        return (
 <React.Fragment>
        <Container>
            <Header></Header>
              <Login />
                <Register />
                <SearchBar />
            <Footer></Footer>
         </Container>

           
                <div>Hi Everyone</div>
                
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