function Exercise4() {
  const ages = [33, 12, 20, 16, 15, 27, 10];

  const [first, , third = 0, ...restAges] = ages;

  const isEven = (x) => x % 2 === 0;

  const evenRest = restAges.filter((num) => num % 2 === 0);

  return (
    <div>
      <h2>Exercise 4</h2>
      <p>First element: {first}</p>
      <p>Is first even? {isEven(first) ? "Yes" : "No"}</p>
      <p>Third element (default 0): {third}</p>
      <p>Rest of ages: {restAges.join(", ")}</p>
      <p>Even numbers in restAges: {evenRest.join(", ")}</p>
    </div>
  );
}

export default Exercise4;
