import React from "react";

function AddressBox() {
  const style = {
    width: 500,
    padding: 80,
  };

  const itemStyle = {
    gap: 15,
  };

  return (
    <div className="address d-flex flex-column m-2" style={style}>
      <div className="d-flex flex-row mb-3" style={itemStyle}>
        <div className="img">A </div>
        <p className="text-monospace text-wrap">
          Tagore Multi-Speciality Hospital 27 / 14 Sector, Urban Estate Karnal
          Haryana India
        </p>
      </div>

      <div className="d-flex flex-row mb-3" style={itemStyle}>
        <div className="img">B </div>
        <p className="text-monospace">0184-4032628 9992929767</p>
      </div>
      <div className="d-flex flex-row mb-3" style={itemStyle}>
        <div className="img">C </div>
        <p className="text-monospace">tagorehospitalkarnal1@gmail.com</p>
      </div>
    </div>
  );
}

export default AddressBox;
