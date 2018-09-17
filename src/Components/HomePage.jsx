import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { Image, Container } from "semantic-ui-react";


class HomePage extends React.Component {
    render() {
        return (
        <Container>
            <Header></Header>
            <Footer></Footer>
         </Container>
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