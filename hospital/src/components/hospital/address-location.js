import React from "react";
import AddressBox from "./address";
import Map from "./google-location";
import styled from "styled-components";

function AddressLocation() {
  const style = {
    gap: 50,
    flexWrap: "wrap",
  };

  return (
    <div className="address-location d-flex flex-row" style={style}>
      {/* <div className="d-flex"> */}
      <AddressBox />
      {/* </div> */}

      {/* <div className="d-flex"> */}
      <Map />
      {/* </div> */}
    </div>
  );
}

export default AddressLocation;
