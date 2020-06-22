import React, { Component } from "react";

import MovieCard from "./MovieCard";

export default class MovieContainer extends Component {
  state = {
    data: {
      Response: "False",
    },
  };
  componentDidMount() {
    this.setState({
      data: this.props.data,
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    if (console.log(JSON.stringify(nextProps) !== JSON.stringify(this.state)))
      return true;
    else return false;
  }
  render() {
    const { data } = this.state;
    let content = "";

    content =
      data.Response === "True"
        ? data.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}
