import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
  state = {
    categories: []  //Массив категорий
  };
  render() {
    return (
      <ul>
        {this.state.categories.map(cur => (     //Вывод категорий на страницу
          <li key={cur.id}>
            <Link to={"/categories/" + cur.id + "/page=0"}>{cur.name}</Link>
          </li>
          ))}
      </ul>
    );
  }
  componentDidMount() {
    /*Получение списка категорий из API*/
    fetch("http://testtask.sebbia.com/v1/news/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data.list }));
  }
}

export default Categories;
