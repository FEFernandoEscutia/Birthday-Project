import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState(data);
  const removeAll = () => {
    setPeople([]);
  };
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const addEmAll = () => {
    setPeople(data)
  };
  
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today!</h3>
        <List people={people}  removePerson={removePerson}/>
        <button className="btn" onClick={removeAll}> remove all!</button>
        <button className="btn" onClick={addEmAll} style={{ margin: "1rem"}}> Add em all!</button>
      </section>
    </main>
  );
};
export default App;
