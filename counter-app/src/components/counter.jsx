import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container ">
          <badge className="badge m-2 badge-success">
            {this.props.counter.id}
          </badge>

          <button
            onClick={() => this.props.onIncrement(this.props.counter.id)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <span className={this.getBadgeClass()}>{this.format()}</span>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let badge = "badge m-2 badge-";
    badge += this.props.counter.value === 0 ? "primary" : "warning";
    return badge;
  }

  format() {
    const count = this.props.counter.value;
    if (count === 0) {
      return "Zero";
    }

    return count;
  }
}

export default Counter;
