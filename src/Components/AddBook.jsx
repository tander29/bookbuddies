import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addNewBook, getAllBooks, googleBook } from "../Redux/Actions/ActBooks";
import GoogleShelf from "./GoogleShelf";

const initialState = {
  search: "",
  title: "",
  author: "",
  isbn10: "",
  isbn13: "",
  image: "",
  rating: "",
  id: null
};
class AddBook extends React.Component {
  state = { ...initialState };

  componentDidMount() {
    console.log("redux state", this.props.state);
  }

  updateBookState = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddBook = () => {
    const bookData = { ...this.state };
    this.props.addNewBook(bookData, this.props.userInfo.id);
  };

  // searchGoogle = () => {
  //   if (this.props.userInfo.id) {
  //     this.props.googleBook(this.state.search);
  //   }
  // };

  render() {
    return (
      <React.Fragment>
        <GoogleShelf data={this.props.googleBook} />

        <Form style={{ padding: "2vh", margin: "auto" }}>
          <p
            className="profileHeader"
            style={{ color: "#61892F", textAlign: "center" }}
          >
            <b>ADD A NEW BOOK TO YOUR BOOKSHELF</b>
          </p>

          <Form.Input
            className="bookTitle"
            placeholder="Title"
            type="text"
            name="title"
            onChange={this.updateBookState}
          />
          <Form.Input
            className="bookAuthor"
            placeholder="Author"
            type="text"
            name="author"
            onChange={this.updateBookState}
          />
          <Form.Input
            className=""
            placeholder="rating"
            type="text"
            name="rating"
            onChange={this.updateBookState}
          />
          <Form.Input
            className=""
            placeholder="*optional isbn10*"
            type="text"
            name="isbn10"
            onChange={this.updateBookState}
          />
          <Form.Input
            className=""
            placeholder="*optional isbn13*"
            type="text"
            name="isbn13"
            onChange={this.updateBookState}
          />

          <Form.Button
            style={{ backgroundColor: "#86C232", color: "white" }}
            className="addBook"
            onClick={this.handleAddBook}
          >
            Add Book
          </Form.Button>
        </Form>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { userInfo: state.userInfo, googleBook: state.googleBookAPI };
};

function mapDispatchToProps(dispatch) {
  return {
    addNewBook: (bookData, id) => {
      dispatch(addNewBook(bookData, id));
    },
    getAllBooks: book => {
      dispatch(getAllBooks(book));
    },
    googleBook: bookData => {
      dispatch(googleBook(bookData));
    }
  };
}
const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook);
export default Connect;
