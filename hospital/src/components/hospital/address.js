import React from "react";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";

function AddressBox() {
  const style = {
    width: 500,
    padding: 15,
    paddingLeft: 30,
    backgroundColor: "lightgrey",
    marginLeft: "7% 7% 4%",
    display: "flex",
  };

  const itemStyle = {
    gap: 15,
  };

  return (
    <div className="card" style={style}>
      <p className="text">Our Location</p>
      <div className="d-flex flex-row mb-2" style={itemStyle}>
        <div className="img">
          <RoomOutlinedIcon />
        </div>
        <p className="text text-wrap">
          Tagore Multi-Speciality Hospital 27 / 14 Sector, Urban Estate Karnal
          Haryana India
        </p>
      </div>
      <div className="d-flex flex-row mb-3" style={itemStyle}>
        <div className="img">
          <PhoneAndroidOutlinedIcon />{" "}
        </div>
        <p className="text">0184-4032628 9992929767</p>
      </div>
      <div className="d-flex flex-row mb-3" style={itemStyle}>
        <div className="img">
          <DraftsOutlinedIcon />
        </div>
        <p className="text">tagorehospitalkarnal1@gmail.com</p>
      </div>
      <div className="d-flex flex-row" style={itemStyle}>
        <div className="img">
          <FacebookIcon />
        </div>
        <p className="text">facebook Link</p>
      </div>
    </div>
  );
}

export default AddressBox;
