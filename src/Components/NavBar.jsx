import React, { Component } from "react";
import { Button, Menu, Icon } from "semantic-ui-react";
import SearchBar from "./SearchBar"

export class NavBar extends Component {
  render() {
    
    return (
      <Menu style={{ backgroundColor: "#474B4F", margin:'0' }} className='stickyMenu' fluid>
        <Menu.Menu>
          <Menu.Item>
            <Button style={{ backgroundColor: '#86C232', color: 'white' }}>Profile</Button>
            
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item> <Button style={{ backgroundColor: '#86C232', color: 'white' }}>Main Page</Button>
            
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu style={{margin:'auto'}}>
          <SearchBar>
          
          </SearchBar>
          <Icon name="search"></Icon>
            
        </Menu.Menu>

        <Menu.Item position='right'><Button onClick={this.props.getLogout} style={{ backgroundColor: '#86C232', color: 'white' }}>Logout</Button></Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;