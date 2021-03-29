import React, { useEffect, useState } from "react";
import Slideshow from "./slideshow";
import About from "./about";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(
    () =>
      fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        }),
    []
  );

  return (
    <React.Fragment>
      {/* <div className="fortnite-name">
        {items.slice(0, 5).map((item) => (
          <h3 className="m-2" key={item.itemId}>
            {item.item.name}
          </h3>
        ))}
      </div> */}
      <Slideshow />
      <About />
    </React.Fragment>
  );
}

export default Home;
