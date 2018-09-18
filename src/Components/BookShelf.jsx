import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx"

export class BookShelf extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>BookShelf</div>
                <Book></Book>
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
)(BookShelf);
export default Connect;