import React, { Component } from "react";
import Parser from 'html-react-parser';

class Article extends Component {
  state = {
    article: null
  };
  render() {
    return <div >
        {(this.state.article!==null) && 
        <div>
            <h1>{this.state.article.title}</h1>
            <p>{this.state.article.shortDescription}</p>
            <div>{Parser(this.state.article.fullDescription)}</div>
        </div> }
    </div>;
  }
  componentDidMount() {
    fetch("http://testtask.sebbia.com/v1/news/details?id=" +
    this.props.match.params.id)
      .then(response => response.json())
      .then(data => this.setState({ article: data.news }));
  }
}
export default Article;
