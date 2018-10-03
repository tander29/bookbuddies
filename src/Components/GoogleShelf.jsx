import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx";
import { googleBook } from "../Redux/Actions/ActBooks";
import { Container, Button, Grid, Input } from "semantic-ui-react";

class GoogleShelf extends React.Component {
  state = {
    googleBooks: [],
    data: this.props.data,
    passData: this.props.data,
    search: ""
  };

  componentDidMount() {
    if (this.props.googleBooks) {
      this.setState({ googleBooks: this.props.googleBooks });
    }
  }

  updateBookState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchGoogle = () => {
    if (this.state.search.length > 1) {
      this.props.googleBook(this.state.search);
    }
  };

  keyPress = event => {
    if (event.key === "Enter") {
      this.searchGoogle();
    }
  };

  defaultBooks() {
    return this.props.googleBooks.map(book => {
      return (
        <Book
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : "N/A"}
          googleImage={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.smallThumbnail
              : ""
          }
          rating={book.volumeInfo.averageRating}
          ratingsCount={book.volumeInfo.ratingsCount}
          cardSize={"tiny"}
          google={"true"}
          key={Math.random() * 200000000}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container style={{ padding: "2vh" }} textAlign="center">
          <div id="search">
            <b>
              <p style={{ color: "#61892F", paddingBottom: "2vh" }}>
                ENTER A TITLE OR AUTHOR TO BEGIN YOUR BOOK SEARCH BELOW
              </p>
            </b>
            <Input
              type="text"
              placeholder="Title or Author"
              className="searchBarGoogle"
              name="search"
              onChange={this.updateBookState}
              onKeyPress={this.keyPress}
            />
            <Button
              onClick={this.searchGoogle}
              style={{ backgroundColor: "#86C232", color: "white" }}
            >
              Search!
            </Button>
          </div>
        </Container>

        <Grid container textAlign="center">
          <Grid.Row>{this.defaultBooks()}</Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { googleBooks: state.googleBookAPI };
};

function mapDispatchToProps(dispatch) {
  return {
    googleBook: bookData => {
      dispatch(googleBook(bookData));
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleShelf);
export default Connect;
