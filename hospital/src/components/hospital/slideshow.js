import React from "react";
import "./hospital.css";
import googleLogo from "./static/google.svg";
import hospital1 from "./static/hospital1.jfif";
import hospital2 from "./static/hospital2.jfif";
import hospital3 from "./static/hospital3.jfif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";

function Slideshow() {
  const imgStyle = {
    height: "30%",
    width: "50%",
  };

  return (
    <Carousel autoPlay showThumbs={false}>
      <div>
        <img src={hospital1} style={imgStyle} alt="" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Title</h5>
          <p>Text about the carousel</p>
        </div>
      </div>
      <div>
        <img src={hospital2} style={imgStyle} alt="" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Title</h5>
          <p>Text about the carousel</p>
        </div>
      </div>
      <div>
        <img src={hospital3} style={imgStyle} alt="" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Title</h5>
          <p>Text about the carousel</p>
        </div>
      </div>
    </Carousel>
  );
}

export default Slideshow;
