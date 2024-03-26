import Person from "./Person";

const List = ({ people, removePerson }) => {
  const handleRemove = (id) => {
    removePerson(id);
  };
  return (
    <section>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <Person {...person} />
            <button
              onClick={() => handleRemove(person.id)}
              className="btn"
              style={{ marginBottom: "1rem"}}
            >
              Remove Person!
            </button>
          </div>
        );
      })}
    </section>
  );
};
export default List;
