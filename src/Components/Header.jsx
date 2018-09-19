import React from "react";
import { Image, Container } from "semantic-ui-react";
import scrumteam1sp from '../images/scrumteam1sp.png';

class Header extends React.Component {
    render() {
      return (
        <Container className='headerNav' style={{ backgroundColor:'#222629' }} fluid>
        <Image src={ scrumteam1sp } size='medium' centered />
        
        </Container>
        
      );
    }
  }
  
  export default Header;