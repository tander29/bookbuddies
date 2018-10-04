import React from "react";
import { connect } from "react-redux";
import Nav from './NavBar.jsx'

class ErrorPage extends React.Component {
    render() {
        return (
          
                <div id="ErrorPage" >
        
                 <Nav />
                 
                </div>
                

            


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