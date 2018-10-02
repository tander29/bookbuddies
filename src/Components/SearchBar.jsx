import React, { Component } from "react";
import { connect } from 'react-redux';
import {filterBooks} from '../Redux/Actions/ActBooks'
import "../App.css";


export class SearchBar extends Component {
    state = {
        search: "",
        searchBooks: []
    }

    componentDidMount(){
        if (this.props.searchBooks){
            this.setState({searchBooks: this.props.searchBooks})
        }
    }


    updateState = event => {
        this.setState({search: event.target.value})
            console.log(this.state)
         
        };

    handleSubmit = (event) => {
        if (event.key === 'Enter') {
            this.updateState()
        }
    }

    updateSearch = () => {
        if(this.state.search.length > 1){
            this.props.filterBooks(this.state.search)
        }
    }
    filterBooks = (event) =>{
        this.setState({
            search: event.target.value
            
        })
        console.log(this.filterBooks)
    }


    render() {
        return(
            <input
                className="search"
                type="text"
                placeholder="Search for books"
                value={this.state.search}
                onChange={this.updateState}
                onKeyPress={this.handleSubmit}

            />
        )
    }
}
const mapStateToProps = state => {
    return {
      books:[{}]
    };
  };
  
  function mapDispatchToProps(dispatch) {
    return {
        filterBooks: () => {
            dispatch(filterBooks())
        }
    };
  }
  
  const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);


export default Connect;