function Exercise5() {
  const people = [
    { name: "Ann", age: 19 },
    { name: "Bob", age: 12 },
    { name: "Chris", age: 15 },
    { name: "Daisy", age: 22 },
    { name: "Eva", age: 13 }
  ];

  const isTeen = (age) => age >= 13 && age <= 19;

  const teenCount = people.filter((p) => isTeen(p.age)).length;

  const teens = people
    .filter((p) => isTeen(p.age))
    .sort((a, b) => a.age - b.age);

  return (
    <div>
      <h2>Exercise 5</h2>
      <p>Số lượng teen: {teenCount}</p>
      <p>Danh sách teen (sắp xếp theo tuổi tăng dần):</p>
      <ul>
        {teens.map((t, i) => (
          <li key={i}>
            {t.name} ({t.age})
          </li>
        ))}
      </ul>
      <p>Is 15 teen? {isTeen(15) ? "Yes" : "No"}</p>
    </div>
  );
}

export default Exercise5;
