import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/hospital/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/hospital/about";
import Home from "./components/hospital/home";
import Footer from "./components/hospital/footer";
import Services from "./components/hospital/services";
import AddressLocation from "./components/hospital/address-location";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Services />
        </Router>
        <AddressLocation />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
