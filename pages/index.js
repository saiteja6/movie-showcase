import React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "./components/Layout";
import SearchBar from "../pages/components/SearchBar";
import fetch from "isomorphic-unfetch";
const APIKey = "ffc15a72";

export default class Home extends React.Component {
  state = {
    res: {},
  };
  onSearch = async (text) => {
    console.log("text", text);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKey}&t=${text}`
    );
    const data = await res.json();
    console.log("data", data);
    console.log("res", res);

    this.setState({ res: data });
  };
  render() {
    const { res } = this.state;
    return (
      <div className="container">
        <Head>
          <title>Movie Showcase</title>
        </Head>

        <main>
          <Layout />

          <h1 className="title">
            Welcome to{" "}
            <Link href="/">
              <a>Movie Showcase!</a>
            </Link>
          </h1>
          <br />
          <br />
          <SearchBar onSearch={this.onSearch} />
          {res && (
            <ul>
              <li key={res}>
                {/* {res.Title}
                {res.Year}
                {res.Rated} */}
                <Link href="/" as={`/res/${res.id}`}>
                  <a>{res.Title}</a>
                </Link>
              </li>
            </ul>
          )}
        </main>
      </div>
    );
  }
}
