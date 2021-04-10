import React from "react";
import AddressBox from "./address";
import Map from "./google-location";

import Covid from "./covid-data";

function AddressLocation() {
  const style = {
    gap: 50,
    flexWrap: "wrap",
    margin: "7% 7% 4%",
  };

  return (
    <div className="address-location d-flex flex-row" style={style}>
      <AddressBox />
      <Map />
      <Covid />
    </div>
  );
}

export default AddressLocation;
