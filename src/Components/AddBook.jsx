import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class AddBook extends React.Component {
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
          name="bookTitle"
          // value={this.state.bookTitle}
          // onChange={this.updateBookTitle}
        />
        <Form.Input
          className="bookAuthor"
          placeholder="Author"
          type="text"
          name="bookAuthor"
          // value={this.state.bookAuthor}
          // onChange={this.updateBookAuthor}
        />
        <Form.Input
          className=""
          placeholder="To Be Determined!"
          type="text"
          name=""
          // value={this.state.bookAuthor}
          // onChange={this.updateBookAuthor}
        />
        <Form.Input
          className=""
          placeholder="To Be Determined!"
          type="text"
          name=""
          // value={this.state.bookAuthor}
          // onChange={this.updateBookAuthor}
        />
        <Form.Input
          className="coverImage"
          placeholder="CoverImage"
          type="file"
          name="coverImage"
          // value={this.state.coverImage}
          // onChange={this.updateCoverImage}
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
export default AddBook;
