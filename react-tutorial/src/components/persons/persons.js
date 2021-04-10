import Person from "./person";

const Persons = (props) => {
  return props.personList.map((person, index) => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      click={props.clicked}
      change={props.change}
    />
  ));
};

export default Persons;
