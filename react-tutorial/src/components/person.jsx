import React from "react";
import "./person.css";

const Person = (props) => {
  return (
    <div className="person">
      <button className="btn btn-secondary btn-sm m-2">Button</button>
      <p onClick={props.click}>
        I am {props.name} and my age is {props.age}
      </p>
      <div className="submit-button">
        <input className="form-control" type="text" onChange={props.changed} />
      </div>
    </div>
  );
};

export default Person;
