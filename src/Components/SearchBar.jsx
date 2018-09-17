import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import "../App.css";

export class SearchBar extends Component {
    state = {
        search: ""
    }

    handleSubmit = (event) => {
        if (event.key === 'Enter') {
            console.log("Hey, you hit the Enter key!")
        }
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return(
            <Search
                className="Search"
                value={this.state.search}
                onKeyPress={this.handleSubmit}
            />
        )
    }
}