function Exercise6() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  // Sort theo end, lấy top 3
  const sorted = [...companies].sort((a, b) => a.end - b.end);
  const top3 = sorted.slice(0, 3);

  // Lọc công ty Technology, sort theo end
  const techSorted = companies
    .filter((c) => c.category === "Technology")
    .sort((a, b) => a.end - b.end);

  return (
    <div>
      <h2>Exercise 6</h2>

      <p>Top 3 công ty (theo năm kết thúc nhỏ nhất):</p>
      <ul>
        {top3.map((c, i) => (
          <li key={i}>
            {c.name} - {c.end}
          </li>
        ))}
      </ul>

      <p>Công ty Technology (sort theo năm kết thúc):</p>
      <ul>
        {techSorted.map((c, i) => (
          <li key={i}>
            {c.name} - {c.end}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise6;
