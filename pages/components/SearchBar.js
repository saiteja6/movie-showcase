import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onChange = (e) => {
    this.setState({ text: e.target.value }, () => console.log(this.state));
  };

  render() {
    const { onSearch } = this.props;
    const { text } = this.state;
    return (
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for a movie ,TV series ..
        </h1>
        <form id="searchForm" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search Movies, TV Series ..."
            onChange={this.onChange}
          />
          <button
            onClick={() => onSearch(text)}
            // type="submit"
            className="btn btn-primary btn-bg mt-3"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
