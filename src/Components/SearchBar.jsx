import React, { Component } from "react";

import "../App.css";

export class SearchBar extends Component {
    state = {
        search: ""
    }

    handleSubmit = (event) => {
        if (event.key === 'Enter') {
            console.log("Hey, you hit the Enter key!")
            console.log(this.state.search)
            this.setState({
                search: ""
            })
        }
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return(
            <input
                className="Search"
                type="text"
                placeholder="Search for books"
                value={this.state.search}
                onKeyPress={this.handleSubmit}
                onChange={this.updateSearch}
            />
        )
    }
}

export default SearchBar;