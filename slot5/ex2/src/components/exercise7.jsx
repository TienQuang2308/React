function Exercise7() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  ];

  // Tạo object mới từ object đầu tiên
  const company0New = { ...companies[0], start: companies[0].start + 10 };

  // Hàm gộp tất cả mảng
  function concatAll(...arrays) {
    return arrays.reduce((acc, arr) => [...acc, ...arr], []);
  }

  const mergedArray = concatAll([1, 2], [3], [4, 5]);

  return (
    <div>
      <h2>Exercise 7</h2>

      <p>
        <strong>Original company:</strong>{" "}
        {companies[0].name} - {companies[0].start}
      </p>
      <p>
        <strong>New company:</strong> {company0New.name} - {company0New.start}
      </p>

      <p>
        <strong>Concat all arrays [1,2], [3], [4,5]:</strong>{" "}
        {mergedArray.join(", ")}
      </p>
    </div>
  );
}

export default Exercise7;
