import React from "react";

function Covid() {
  const itemStyle = {};

  return (
    <div className="card">
      <div className="covid-data">
        <p className="h4 m-2"> Covid Cases</p>

        <div className="">
          <p className="h5">India</p>
          <p className="h6 ml-3">Active</p>
          <p className="h6 ml-3">Deaths</p>
          <p className="h6 ml-3">Recovered</p>
        </div>

        <div className="">
          <p className="h5">Punjab</p>
          <p className="h6 ml-3">Active</p>
          <p className="h6 ml-3">Deaths</p>
          <p className="h6 ml-3">Recovered</p>
        </div>
      </div>
    </div>
  );
}

export default Covid;
