// when making a new component, every component needs to import react and connect, to properly make component and connect to redux store
import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Login from './Login'
import Register from './Register'
import BookShelf from './BookShelf.jsx'

import { Container, Card, Modal, Divider, Grid, Button } from "semantic-ui-react";






class HomePage extends React.Component {
    render() {
        return (


          

            <React.Fragment>
                <Container fluid>
                    <Header></Header>
                    <NavBar></NavBar>
                    <Container>
                        <Grid centered>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <BookShelf></BookShelf>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card style={{ backgroundColor:"#EDF5E1"}} centered>
                                        <Modal size='tiny' trigger={<Button style={{backgroundColor:'#379683', color:'white'}}>Login</Button>} closeIcon>
                                            <Login  />
                                        </Modal>
                                        <Divider horizontal >Or</Divider>
                                        <Modal size='tiny' trigger={<Button style={{backgroundColor:'#379683', color:'white'}}>Register</Button>} closeIcon>
                                            <Register test={this.props.register} />
                                        </Modal>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>  
                        </Grid>      
                     </Container>           
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