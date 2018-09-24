// when making a new component, every component needs to import react and connect, to properly make component and connect to redux store
import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";

import Login from './Login'
import Register from './Register'
import BookShelf from './BookShelf.jsx'

import { Container, Modal, Grid, Button } from "semantic-ui-react";






class HomePage extends React.Component {
    render() {
        return (


          

            <React.Fragment>
                <Container style={{backgroundColor:'#474B4F'}} fluid>
                    <Header></Header>
                    
                    <Container style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
                        <Grid centered>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <BookShelf></BookShelf>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    
                                        
                                        <Modal size='tiny'  trigger={<Button style={{backgroundColor:'#86C232', color:'white', marginBottom:'5vh'}}>Login</Button>} closeIcon>
                                            <Login   />
                                        </Modal>
                                        
                                        
                                        <Register />
                                        
                                        
                                    
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