import React from "react";
import { Button } from "@material-ui/core";

function Footer() {
  const footerDivStyle = {
    backgroundColor: "black",
    color: "white",
    height: 80,
  };

  const footerStyle = {
    textAlign: "left",
    paddingLeft: 100,
    paddingTop: 27,
  };

  return (
    <div className="footer" style={footerDivStyle}>
      {/* <Button variant="">Default</Button> */}
      <footer>
        <p style={footerStyle}>This is a footer</p>
      </footer>
    </div>
  );
}

export default Footer;
