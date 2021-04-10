import React, { Component } from "react";
import "./App.css";
import Hook from "./../counter/hook";
import Persons from "./../persons/persons";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Amol", age: 34 },
      { id: "2", name: "Robin", age: 45 },
      { id: "3", name: "vikas", age: 53 },
    ],
  };

  personSwapHandler = () => {
    this.setState({
      persons: [
        { name: "Amol", age: 27 },
        { name: "Robin", age: 23 },
      ],
    });
  };

  changeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        { name: "Robin", age: 23 },
      ],
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>This is test app</h2>
        <Hook limit={3} />
        <div className="App">
          <Persons
            personList={this.state.persons}
            clicked={this.personSwapHandler}
            change={this.changeHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
