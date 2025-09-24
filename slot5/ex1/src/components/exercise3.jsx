function exercise3() {
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  // Destructuring với default value
  const {
    address: { street, city = "Unknown city" }
  } = person;

  return (
    <div>
      <h2>Exercise 3</h2>
      <p>Street: {street}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default exercise3;
