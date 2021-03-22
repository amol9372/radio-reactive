import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  state = {};

  render() {
    return (
      <div className="flex-container m-2">
        <div className="card m-2">
          <div className="card-body">
            <h3> This is a card </h3>
          </div>
        </div>

        <div className="card m-2">
          <div className="card-body">
            <h3> This is a card </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
