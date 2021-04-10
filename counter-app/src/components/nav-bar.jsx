import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light m-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Cart
            <span className="badge badge-pill badge-secondary m-1">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
