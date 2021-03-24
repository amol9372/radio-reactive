import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/hospital/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/hospital/about";
import Home from "./components/hospital/home";
import AddressBox from "./components/hospital/address";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Home} />
      </Switch>
      <AddressBox />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
