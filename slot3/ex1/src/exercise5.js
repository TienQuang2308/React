const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 12 },
  { name: "Chris", age: 15 },
  { name: "Daisy", age: 22 },
  { name: "Eva", age: 13 }
];

const teens = people
    .filter(p => p.age >= 13 && p.age <= 19)
    .map(p => `${p.name} (${p.age})`);

teens.forEach(t => console.log(t));