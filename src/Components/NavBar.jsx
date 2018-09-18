import React, { Component } from "react";
import { Button, Menu, Icon } from "semantic-ui-react";
import SearchBar from "./SearchBar"

export class NavBar extends Component {
  render() {
    
    return (
      <Menu style={{ marginBottom: '2vh', backgroundColor: "#EDF5E1" }} className='stickyMenu' fluid>
        <Menu.Menu>
          <Menu.Item>
            <Button style={{ backgroundColor: '#379683', color: 'white' }}>Profile</Button>
            
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item> <Button style={{ backgroundColor: '#379683', color: 'white' }}>Messages</Button>
            
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu style={{margin:'auto'}}>
          <SearchBar>
          
          </SearchBar>
          <Icon name="search"></Icon>
            
        </Menu.Menu>

        <Menu.Item position='right'><Button onClick={this.props.getLogout} style={{ backgroundColor: '#379683', color: 'white' }}>Logout</Button></Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;