import React from "react";

const Label = (props) => {
  return (
    <label style={{ color: props.color, fontSize: props.font }}>
      {props.children}
    </label>
  );
};

export default Label;
