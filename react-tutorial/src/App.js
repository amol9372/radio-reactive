import React, { Component } from "react";
import "./App.css";
import Person from "./components/person";

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

        <div className="App">
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.personSwapHandler}
              changed={this.changeHandler}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
