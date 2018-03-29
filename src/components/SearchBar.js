import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar p-2">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

SearchBar.prototypes = {
  onSearchTermChange: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  //name: "Stranger"
};

export default SearchBar;
