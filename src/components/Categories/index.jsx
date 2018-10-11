import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
  state = {
    categories: []
  };
  render() {
    return (
      <ul>
        {this.state.categories.map(cur => (
          <li key={cur.id}>
            <Link to={"/categories/" + cur.id + "/page=0"}>{cur.name}</Link>
          </li>
          ))}
      </ul>
    );
  }
  componentDidMount() {
    fetch("http://testtask.sebbia.com/v1/news/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data.list }));
  }
}

export default Categories;
