// ===== Dummy Data =====
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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// ===== Functions =====
function sum(...nums) {
  return nums.reduce((acc, n) => {
    return (typeof n === "number" && !isNaN(n)) ? acc + n : acc;
  }, 0);
}

function avg(...nums) {
  const { total, count } = nums.reduce(
    (acc, n) => {
      if (typeof n === "number" && !isNaN(n)) {
        acc.total += n;
        acc.count++;
      }
      return acc;
    },
    { total: 0, count: 0 }
  );
  return count === 0 ? 0 : +(total / count).toFixed(2);
}

// ===== Test sum & avg =====
console.log(sum(1, 2, 3));        // 6
console.log(sum(1, "x", 4));      // 5
console.log(avg(1, 2, 3, 4));     // 2.5
console.log(avg());               // 0

// ===== Test với dữ liệu mẫu =====
console.log("Age >= 21:", ages.filter(age => age >= 21));
console.log("Retail Company:", companies.filter(c => c.category === "Retail"));
console.log("Name:", person.name);
