// when making a new component, every component needs to import react and connect, to properly make component and connect to redux store
import React from "react";
import { connect } from "react-redux";
import BookBuddiesinfo from '../images/BookBuddiesinfo.jpg'
import Header from "./Header";
import Footer from "./Footer";
import Login from './Login'
import Register from './Register'
import { Container, Modal, Grid, Button, Image } from "semantic-ui-react";

class HomePage extends React.Component {
    render() {
        return (


          

            <React.Fragment>
                <Container style={{backgroundColor:'#474B4F'}} fluid id="homepagecontainer">
                    <Header></Header>
                    
                    <Container >
                       
                        <Grid centered >
                            <Grid.Row columns={2}>
                                <Grid.Column id="homepageinfo">
                                <Grid divided='vertically'>
                                    <Grid.Row columns={1}>
                                    <Grid.Column>
                                        <div id="blah">
                                       <Image src= {BookBuddiesinfo} />
                                       </div>
                                    </Grid.Column>
                              
                                    </Grid.Row>
                                </Grid>
                                
                                </Grid.Column>
                               
                                <Grid.Column columns={2} id="divider"  textAlign='center'>
                                    

                                    <div id="homepageregister">
                                        <Modal size='tiny'  trigger={<Button style={{backgroundColor:'#86C232', color:'white', marginBottom:'5vh'}}>Login</Button>} closeIcon>
                                            <Login   />
                                        </Modal>
                                        
                                        
                                        <Register />
                                        
                                        </div>
                                    
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