import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx";
import { Grid } from "semantic-ui-react";

class BookShelf extends React.Component {
  state = { booksToDisplay: [] };
  componentDidMount() {
    console.log("propsbooks", this.props.allBooks);
    if (this.props.allBooks) {
      this.setState({ booksToDisplay: this.props.allBooks });
    }
  }

  defaultBooks() {
    console.log("default books", this.state);
    return this.state.booksToDisplay.map(book => {
      return (
        <Book
          title={book.title}
          author={book.author}
          bookId={book.id}
          ownerId={book.userId}
          image={book.image}
          rating={book.rating}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.defaultBooks()}
        {/* <Grid columns={3} stackable style={{ padding: "auto" }}>
        <Grid.Row>
          <Grid.Column>
            <Book className="bookStyling" />
          </Grid.Column>
          <Grid.Column>
            <Book className="bookStyling" />
          </Grid.Column>
          <Grid.Column>
            <Book className="bookStyling" />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { allBooks: state.books };
};

function mapDispatchToProps(dispatch) {
  return {};
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
export default Connect;
