import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx";
import { Container, Grid, Button } from "semantic-ui-react";
import { clearBooks, stuff } from '../Redux/Actions/ActBooks'
class BookShelf extends React.Component {
  state = { booksToDisplay: [] };
  componentDidMount() {
    if (this.props.allBooks) {
      this.setState({ booksToDisplay: this.props.allBooks });
    }else{
      this.setState({booksToDisplay: this.props.filterBooksArray})
    }
  }

  resetBooks =()=>{
      this.setState({booksToDisplay:this.props.allBooks})
      this.props.clearBooks()
      
  }

  defaultBooks=()=> {
    console.log("props search",this.props.search)
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
    this.props.clearBooks()
  }
  filterBooks = () =>{
    this.setState({booksToDisplay:this.props.allBooks})
    const filterBooksArray = this.state.booksToDisplay.filter(book =>{
      const title = book.title.toLowerCase();
      console.log(title)
      const search = this.props.search.toLowerCase();
      console.log(search)
      return title.includes(search)  
      
    })
    this.setState({booksToDisplay: filterBooksArray})
  }
  render() {
    return (
      <React.Fragment>
      <Button onClick={this.filterBooks}>search</Button>
      <Button onClick={this.resetBooks}>All Books</Button>
        <Grid container style={{ paddingTop: "3vh" }}>
          {this.defaultBooks()}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { allBooks: state.books,
          ...state };
    
};

function mapDispatchToProps(dispatch) {
  return {
    clearBooks:() => {dispatch(clearBooks())},
    stuff:() => {dispatch(stuff())}
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
export default Connect;
