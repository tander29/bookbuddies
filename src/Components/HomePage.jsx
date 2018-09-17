import React from "react";
import { connect } from "react-redux";
import { Login, Register } from "./Authorization"
import SearchBar from "./SearchBar"


class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>Hi Everyone</div>
                <Login />
                <Register />
                <SearchBar />
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