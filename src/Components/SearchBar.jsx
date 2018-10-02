import React, { Component } from "react";
import { connect } from 'react-redux';
import {filterBooks, stuff} from '../Redux/Actions/ActBooks'
import "../App.css";


class SearchBar extends Component {
    state = {
        search: ""
    }

    updateState = event => {
        this.setState({search: event.target.value})
       
        
        };

    handleSubmit = (event) => {
        if (event.key === 'Enter') {
            this.updateSearch()
            this.setState({search:''})
        
        }
    }

    updateSearch = (event) => {
        if(this.state.search.length > 1){
            this.props.filterBooks(this.state.search)
        }
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
            ...state,
            search: state.search
    };
  };
  
  function mapDispatchToProps(dispatch) {
    return {
        filterBooks: (search) => {
            dispatch(filterBooks(search))
        }
    };
  }
  
  const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);


export default Connect;