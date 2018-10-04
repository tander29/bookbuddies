import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx";
import { Grid, Button } from "semantic-ui-react";
import { clearBooks } from "../Redux/Actions/ActBooks";
class BookShelf extends React.Component {
  state = { booksToDisplay: [] };
  componentDidMount() {
    if (this.props.allBooks) {
      this.setState({ booksToDisplay: this.props.allBooks });
    } else {
      this.setState({ booksToDisplay: this.props.filterBooksArray });
    }
    if (this.props.location === "/bookbuddies/profile") {
      this.filterMyBooks();
    }
  }

  resetBooks = () => {
    this.setState({ booksToDisplay: this.props.allBooks });
    this.props.clearBooks();
  };

  defaultBooks = () => {
    if (this.state.booksToDisplay.length < 1) {
      return <div>No book buddy has added that yet</div>;
    } else {
      return this.state.booksToDisplay.map(book => {
        return (
          <Book
            title={book.title}
            author={book.author}
            bookId={book.id}
            ownerId={book.userId}
            image={book.image}
            rating={book.rating}
            key={book.id}
            google={"false"}
          />
        );
      });
    }
  };
  filterBooks = () => {
    this.setState({ booksToDisplay: this.props.allBooks });
    const filterBooksArray = this.state.booksToDisplay.filter(book => {
      const title = book.title.toLowerCase();
      const search = this.props.search.toLowerCase();
      return title.includes(search);
    });
    this.setState({ booksToDisplay: filterBooksArray });
  };

  filterMyBooks = () => {
    const filterMyBooksArray = this.props.allBooks.filter(book => {
      return this.props.userInfo.id === book.userId;
    });
    this.setState({ booksToDisplay: filterMyBooksArray });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.location ? (
          ""
        ) : (
          <React.Fragment>
            <Button onClick={this.filterBooks}>Search</Button>
            <Button onClick={this.resetBooks}>All Books/Reset Search</Button>
          </React.Fragment>
        )}
        <Grid container style={{ paddingTop: "3vh" }}>
          {this.defaultBooks()}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allBooks: state.books,
    ...state
  };
};

function mapDispatchToProps(dispatch) {
  return {
    clearBooks: () => {
      dispatch(clearBooks());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
export default Connect;
