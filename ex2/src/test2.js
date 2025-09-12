
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log("Duyệt bằng for:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


console.log("\nDuyệt bằng forEach:");
numbers.forEach(num => console.log(num));


console.log("\nDuyệt bằng map:");
numbers.map(num => console.log(num));

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("\nCác số chẵn trong mảng:", evenNumbers);

let people = [
    { id: 1, name: "John", age: 18 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 30 },
    { id: 4, name: "Eve", age: 19 }
];

console.log("\nDanh sách people:");
people.forEach(person => {
    console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
});

let peopleOver20 = people.filter(person => person.age > 20);
console.log("\nNgười có age > 20:");
peopleOver20.forEach(person => {
    console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
});
// 4. Tính tổng số tuổi dùng reduce
let totalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log("\nTổng số tuổi của tất cả mọi người:", totalAge);

