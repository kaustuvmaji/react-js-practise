import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import createProduct from "./components/CreateProduct";
import modifyProduct from "./components/ProductModify";
import productList from "./components/ProductList";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://kaustuvmaji.blogspot.com/" target="_blank">
              <img src={logo} width="30" height="30" alt="KaustuvMaji" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Demo: Product Configuration App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Product</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={productList} />
          <Route path="/edit/:id" component={modifyProduct} />
          <Route path="/create" component={createProduct} />
        </div>
      </Router>
    );
  }
}

export default App;