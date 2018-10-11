import React, { Component } from "react";
import { Link } from "react-router-dom";

class Articles extends Component {
    state = {
        articles:[],
        pages:[0,1,2]
      };
  getArticles = (page) =>{
    fetch("http://testtask.sebbia.com/v1/news/categories/"+ this.props.match.params.id +"/news?page=" + page)
    .then(response => response.json())
    .then(data => this.setState({ articles: data.list }));
  }
  render() {
    return (
      <div className='container mt-3 '>
        <div className="row">
          {this.state.articles.map(cur => (
            <div className="col-md-4" key={cur.id}>
              <Link to={"/article/" + cur.id}><h2>{cur.title}</h2></Link>
              <span>{cur.date}</span>
              <p className="text-muted">{cur.shortDescription}</p>
            </div>
          ))}
        </div>
        <ul className="pagination fixed-bottom justify-content-center">
          {this.state.pages.map((cur)=>(
              <li class="page-item"><Link className="page-link" to={"/categories/" + this.props.match.params.id + "/page="+cur}>{cur+1}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.page !== this.props.match.params.page ) {
      this.getArticles(nextProps.match.params.page)
    }
  }
 componentDidMount(){
    if(this.state.articles.length===0){
      this.getArticles(this.props.match.params.page)
    }
  }
}
export default Articles;
