import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx";
import { googleBook } from "../Redux/Actions/ActBooks";

class GoogleShelf extends React.Component {
  state = { googleBooks: [], data: this.props.data, passData: this.props.data };

  componentDidMount() {
    console.log("propsbooks", this.props.googleBooks);
    if (this.props.googleBooks) {
      this.setState({ googleBooks: this.props.googleBooks });
    }
  }

  updateBookState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchGoogle = () => {
    this.props.googleBook(this.state.search);
  };

  defaultBooks() {
    return this.props.googleBooks.map(book => {
      return (
        <Book
          title={book.volumeInfo.title}
          author={
            book.volumeInfo.authors[0] ? book.volumeInfo.authors[0] : "N/A"
          }
          googleImage={book.volumeInfo.imageLinks.smallThumbnail}
          rating={book.volumeInfo.averageRating}
          ratingsCount={book.volumeInfo.ratingsCount}
          cardSize={"tiny"}
          google={"true"}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="search">
          <div>
            Save some typing, Search for a book details enter title or author
          </div>
          <input
            type="text"
            placeholder="title or author"
            name="search"
            onChange={this.updateBookState}
          />
          <button onClick={this.searchGoogle}>Search!</button>
        </div>

        {this.defaultBooks()}
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
