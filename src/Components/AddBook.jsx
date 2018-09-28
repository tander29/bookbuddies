import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addNewBook, getAllBooks, googleBook } from "../Redux/Actions/ActBooks";

const initialState = {
  title: "",
  author: "",
  isbn10: "",
  isbn13: "",
  image: "",
  rating: ""
};
class AddBook extends React.Component {
  state = { ...initialState };

  componentDidMount() {
    this.props.getAllBooks("test");
    console.log("redux state", this.props.state);
  }

  updateBookState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddBook = () => {
    const bookData = { ...this.state, userInfo: "userInfo" };
    this.props.googleBook(this.state.title);
    this.props.addNewBook(bookData);
  };

  render() {
    return (
      <Form style={{ padding: "1vh", margin: "auto" }}>
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
          placeholder="To Be Determined!"
          type="text"
          name="rating"
          onChange={this.updateBookState}
        />
        <Form.Input
          className=""
          placeholder="isbn10"
          type="text"
          name="isbn10"
          onChange={this.updateBookState}
        />
        <Form.Input
          className=""
          placeholder="isbn13"
          type="text"
          name="isbn13"
          onChange={this.updateBookState}
        />
        <Form.Input
          className="coverImage"
          placeholder="CoverImage"
          type="text"
          name="image"
          // value={this.state.coverImage}
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
    );
  }
}
const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

function mapDispatchToProps(dispatch) {
  return {
    addNewBook: bookData => {
      dispatch(addNewBook(bookData));
    },
    getAllBooks: book => {
      dispatch(getAllBooks(book));
    },
    googleBook: bookTitle => {
      dispatch(googleBook(bookTitle));
    }
  };
}
const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook);
export default Connect;
