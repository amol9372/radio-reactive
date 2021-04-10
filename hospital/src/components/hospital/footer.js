import React from "react";

function Footer() {
  const footerDivStyle = {
    backgroundColor: "black",
    color: "white",
    height: 60,
  };

  const footerStyle = {
    textAlign: "left",
    paddingLeft: 100,
    paddingTop: 15,
  };

  return (
    <div className="footer" style={footerDivStyle}>
      {/* <Button variant="">Default</Button> */}
      <footer>
        <p style={footerStyle}>2021 Manjit Hospital All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
