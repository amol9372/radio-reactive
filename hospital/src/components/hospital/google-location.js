import React, { Component } from "react";
import { render } from "react-dom";
import "./hospital.css";

function Map() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="450"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=manjit%20hospital%20nurmahal&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://embedgooglemap.net/maps/48"></a>
        <br></br>
        <a href="https://www.embedgooglemap.net"></a>
      </div>
    </div>
  );
}

export default Map;
