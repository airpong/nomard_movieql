const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 17,
    gender: "female",
  },
  {
    id: "2",
    name: "Nicolas1",
    age: 17,
    gender: "female",
  },
  {
    id: "3",
    name: "Nicolas2",
    age: 17,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => String(id) === person.id);
  return filteredPeople[0];
};

export default people;
