import React, { Component } from "react";
import Parser from 'html-react-parser';/*Парсер html*/

class Article extends Component {
  state = {
    article: null  /*Объект статьи*/
  };
  render() {
    return <div >
        {(this.state.article!==null) && /*Если статья не загрузилась,то ничего не выводим*/
        <div>
            <h1>{this.state.article.title}</h1>
            <p>{this.state.article.shortDescription}</p>
            <div>{Parser(this.state.article.fullDescription)}</div> {/*Вставка html кода*/}
        </div> }
    </div>;
  }
  componentDidMount() {
    fetch("http://testtask.sebbia.com/v1/news/details?id=" +   /*Загрузка*/
    this.props.match.params.id)                                /*одной статьи */
      .then(response => response.json())                       /*через API */
      .then(data => this.setState({ article: data.news }));    /*в формате jSOn */
  }
}
export default Article;
