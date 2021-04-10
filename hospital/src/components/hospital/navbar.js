import React from "react";
import googleLogo from "./static/google.svg";
import faceboogLogo from "./static/facebook.svg";
import followLogo from "./static/follow.svg";

function Navbar() {
  const logoStyle = {
    height: 25,
    width: 25,
  };

  const followlogoStyle = {
    height: 35,
    width: 35,
  };

  const socialStyle = {
    textAlign: "center",
    gap: 10,
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light">
      <a className="navbar-brand" href="/"></a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="right-items d-flex" style={socialStyle}>
        <img src={followLogo} alt="" style={followlogoStyle} />

        <img src={googleLogo} alt="" style={logoStyle} />

        <img src={faceboogLogo} alt="" style={logoStyle} />
      </div>
    </nav>
  );
}

export default Navbar;
