function exercise2() {
  // phải dùng array [] thay vì {}
    const numbers = [1, 12, -3, 4, 15, 29, 18, 7, 9, 11];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;

    const names = ["Anna", "John", "Michael", "Bella", "Chris", "David"];
    const sortedNames = [...names].sort();

    const people = [
    { id: 1, name: "Alice", age: 20, major: "Computer Science", grade: 8.2 },
    { id: 2, name: "Bob", age: 22, major: "Mathematics", grade: 6.5 },
    { id: 3, name: "Charlie", age: 21, major: "Physics", grade: 7.9 },
    { id: 4, name: "Diana", age: 19, major: "Chemistry", grade: 9.1 },
    { id: 5, name: "Ethan", age: 23, major: "Biology", grade: 5.8 },
    { id: 6, name: "Fiona", age: 20, major: "English", grade: 7.5 },
    { id: 7, name: "George", age: 24, major: "History", grade: 6.9 },
    { id: 8, name: "Hannah", age: 22, major: "Philosophy", grade: 8.7 },
    { id: 9, name: "Ian", age: 21, major: "Economics", grade: 7.2 },
    { id: 10, name: "Julia", age: 20, major: "Art", grade: 8.0 }
  ];


  const topStudents = people
    .filter((s) => s.grade >= 7.5)
    .sort((a, b) => b.grade - a.grade);

    const avgTopGrade =
    topStudents.reduce((acc, student) => acc + student.grade, 0) /
    topStudents.length;

  return (
    <div>
      <h2>Exercise 2</h2>
      <p>In mảng số nguyên:</p>
      <ul>
        {numbers.map((num, i) => (
          <li key={i}>Phần tử thứ {i} - {num}</li>
        ))}
      </ul>
      <p>Tổng các phần tử trong mảng: {sum}</p>
      <p>Giá trị trung bình: {avg.toFixed(2)}</p>

      <p>Danh sách tên:</p>
      <ul>
        {sortedNames.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <p>Sinh viên có grade ≥ 7.5 (sắp xếp giảm dần):</p>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {topStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>           
          ))}
          <tr style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}>
            <td>Trung bình điểm (≥ 7.5)</td>
            <td>{avgTopGrade.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default exercise2;
