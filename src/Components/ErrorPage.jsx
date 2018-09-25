import React from "react";
import { connect } from "react-redux";


class ErrorPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>YOU DONE FUCKED UP</div>
                <div>Nav bar import on this so we can navigate</div>
                <div>Wrong page, go home</div>

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
)(ErrorPage);
export default Connect;