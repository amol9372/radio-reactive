import Navbar from "./components/nav-bar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";
import Card from "./components/card-component";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],

    initCount: 4,
  };

  handleIncrement = (counterId) => {
    const counter = this.state.counters.find(
      (counter) => counter.id === counterId
    );

    const index = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const countersUpdated = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: countersUpdated });
  };

  handleReset = () => {
    const counters = [];
    for (var i = 0; i < this.state.initCount; i++)
      counters.push({ id: i + 1, value: 0 });

    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            // id={this.props.counter.id}
            // value={this.props.counter.value}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
        <Card />
      </React.Fragment>
    );
  }
}

export default App;
