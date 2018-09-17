import React from "react";
import { connect } from "react-redux";


class HomePage extends React.Component {
    render() {
        return (
            <div>Hi Everyone</div>


        );
    }
}

const mapStateToProps = state => {
    return
};

function mapDispatchToProps(dispatch) {
    return

}

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
export default Connect;