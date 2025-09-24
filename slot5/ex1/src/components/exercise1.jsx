function exercise1() {
    const double = x => x * 2;

    const isEven = x => x % 2 === 0; 

  return (
    <div>
      <h2>Exercise 1</h2>
      <p>double(7) = {double(7)}</p>
      <p>isEven(7) = {isEven(7).toString() ? "Even" : "Odd"}</p>
    </div>
  );
}
export default exercise1;