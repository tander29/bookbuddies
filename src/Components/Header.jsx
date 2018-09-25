import React from "react";
import { Image, Card } from "semantic-ui-react";
import bookbuddylogo from '../images/Headerimg.jpg';

class Header extends React.Component {
    render() {
      return (
        <Card className='headerNav' style={{ backgroundColor:'#222629', margin: '0' }} fluid>
        <Image style={{ backgroundColor:'white' }} src={ bookbuddylogo } id="headerimg" centered />
        
        </Card>
        
      );
    }
  }
  
  export default Header;