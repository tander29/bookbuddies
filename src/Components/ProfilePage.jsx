import React from "react";
import { connect } from "react-redux";
import { Grid, Button, Modal } from 'semantic-ui-react'
import Header from "./Header";
import Footer from "./Footer";
import Login from './Login'
import Register from './Register'
import { Image, Icon, Card, Input } from "semantic-ui-react";
import SearchBar from "./SearchBar"
import Pic from '../images/scrumteam1sp.png';
import Book from './Book.jsx';
import { Menu, Segment, Rating } from 'semantic-ui-react'
import NavBar from './NavBar.jsx';
import BookShelf from './BookShelf.jsx'
import "../App.css"
import Messages from './Messages.jsx'



class ProfilePage extends React.Component {

    state = {
        messageContent: null,
        modalOpen: false,
        name: '',
        username: '',
        location: '',
        bio: ''
    }

    modalSwitchStatus = () => {
        console.log(this.state.modalOpen)
        this.setState({ modalOpen: !this.state.modalOpen })
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })


    }


    render() {
        const { modalOpen } = this.state
        return (

            <div id="profilepage">
                <Header />
                <NavBar />
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Card>
                                <Image src={Pic} />
                                <Card.Content>
                                    <Card.Header>Matthew</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Friends
                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <SearchBar />
                            <div id="menubar">
                                <Menu id="Switchbar">
                                    <Menu.Item
                                        name='Owned'
                                        // active={activeItem === 'editorials'}
                                        onClick={this.handleItemClick}
                                    >
                                        Owned
                        </Menu.Item>

                                    <Menu.Item name='Currently Have'
                                        //  active={activeItem === 'reviews'}
                                        onClick={this.handleItemClick}>
                                        Currently Have
                        </Menu.Item>

                                    <Menu.Item
                                        name='Messages'
                                        // active={activeItem === 'upcomingEvents'}
                                        onClick={this.handleItemClick}
                                    >
                                        Messages
                        </Menu.Item>
                                </Menu>
                            </div>
                            <Messages />
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Segment vertical>Name: {this.state.name}</Segment>
                            <Segment vertical>UserName: {this.state.username}</Segment>
                            <Segment vertical>Location:{this.state.location}</Segment>
                            <Segment vertical>Bio:{this.state.bio}</Segment>
                            <div id="ratingbox">
                                <Modal closeIcon
                                    open={modalOpen} onClose={this.modalSwitchStatus} trigger={<Button onClick={this.modalSwitchStatus}>Update Info</Button>}>
                                    <Modal.Header>Update Your Info</Modal.Header>
                                    <Modal.Content image>

                                        <Modal.Description>
                                            <Header>Profile Info:</Header>
                                            <Segment vertical>Name: <input onChange={this.handleChange} name='name' /></Segment>
                                            <Segment vertical>UserName: <input onChange={this.handleChange} name='username' /></Segment>
                                            <Segment vertical>Location: <input onChange={this.handleChange} name='location' /></Segment>
                                            <Segment vertical>Bio: <input onChange={this.handleChange} name='bio' /></Segment>
                                            <Segment vertical>Rating:<Rating id="rating" icon='star' size="large" defaultRating={0} maxRating={5} /></Segment>

                                        </Modal.Description>
                                    </Modal.Content>
                                    <button onClick={this.modalSwitchStatus}>Close</button>
                                    <button >Update</button>
                                </Modal>

                                <Rating id="rating" icon='star' size="large" defaultRating={0} maxRating={5} />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <div id="feed">
                                <BookShelf />
                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
                <Footer />
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
)(ProfilePage);
export default Connect;