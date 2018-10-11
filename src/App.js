import React, { Component } from "react";
import { Route } from "react-router-dom";
import Categories from "./components/Categories";
import Articles from "./components/Articles";
import Article from "./components/Article";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Categories} />
        <Route path={"/categories/:id/page=:page"} component={Articles} />
        <Route path="/article/:id" component={Article} />
      </div>
    );
  }
}

export default App;
