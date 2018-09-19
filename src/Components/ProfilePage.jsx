import React from "react";
import { connect } from "react-redux";
import { Grid } from 'semantic-ui-react'
import Header from "./Header";
import Footer from "./Footer";
import Login from './Login'
import Register from './Register'
import { Image, Icon, Card } from "semantic-ui-react";
import SearchBar from "./SearchBar"
import Pic from '../images/scrumteam1sp.png';
import Book from './Book.jsx';
import { Menu , Segment } from 'semantic-ui-react'
import NavBar from './NavBar.jsx';
import BookShelf from './BookShelf.jsx'
import "../App.css"
import Messages from './Messages.jsx'


class ProfilePage extends React.Component {
    render() {
        return (

            <div>
                <Header/>
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
                    <SearchBar/>
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
                    <Segment vertical>Name:</Segment>
                    <Segment vertical>UserName:</Segment>
                    <Segment vertical>Location:</Segment>
                    <Segment vertical>Bio:</Segment>
              </Grid.Column>
              <Grid.Column width={10}>
              <div id="feed">
              <BookShelf/>
              </div>
              </Grid.Column>
            
            </Grid.Row>
          </Grid>
            <Footer/>
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