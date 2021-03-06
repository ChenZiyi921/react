import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
// 加载组件
import List from "./List";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>App</h1>
          <ul>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          <Route path="/list" component={List} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
