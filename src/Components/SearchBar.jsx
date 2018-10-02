import React, { Component } from "react";

import "../App.css";
import {} from "semantic-ui-react";

export class SearchBar extends Component {
  state = {
    search: ""
  };

  handleSubmit = event => {
    if (event.key === "Enter") {
      this.setState({
        search: ""
      });
    }
  };

  updateSearch = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    return (
      <input
        className="search"
        type="text"
        placeholder="Search for books"
        value={this.state.search}
        onKeyPress={this.handleSubmit}
        onChange={this.updateSearch}
      />
    );
  }
}

export default SearchBar;
