import React from "react";
import { Image, Container, Card } from "semantic-ui-react";
import bookbuddylogo from '../images/bookbuddylogo.png';

class Header extends React.Component {
  render() {
    return (

      <Card className='headerNav' style={{ backgroundColor: '#222629', margin: '0' }} fluid>
        <Image style={{ backgroundColor: 'white' }} src={bookbuddylogo} size='medium' centered />
      </Card>

    );
  }
}

export default Header;