import React, { Component, useState } from "react";

function Hook() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="hooks">
      <button className="btn btn-secondary m-2" onClick={incrementCount}>
        Press It
      </button>
      <label className="badge badge-primary m-2">{count}</label>
    </div>
  );
}

export default Hook;
