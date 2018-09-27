import React from "react";
import { Image, Card } from "semantic-ui-react";
import bookbuddylogo from "../images/bookbuddylogoresize.png";

class Header extends React.Component {
  render() {
    return (
      <Card
        className="headerNav"
        style={{ backgroundColor: "#222629", margin: "1px", borderRadius:'0'}}
        fluid
      >
        <Image
          style={{ marginTop:'5vh', marginBottom:'5vh' }}
          src={bookbuddylogo}
          id="headerimg"
          centered
          size='medium'
        />
      </Card>
    );
  }
}

export default Header;
