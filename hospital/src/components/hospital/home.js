import React from "react";
import Slideshow from "./slideshow";
import About from "./about";

function Home() {
  return (
    <React.Fragment>
      <Slideshow />
      <About />
    </React.Fragment>
  );
}

export default Home;
