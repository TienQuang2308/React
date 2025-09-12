/*let greet = (name, timeOfDay) => {
    console.log(`Good ${timeOfDay}, ${name}!`);
};
greet('Alice', 'Good morning')
greet('Bob', 'evening')

let square = num => {
    return num * num;
};
console.log(square(5))
console.log(square(8))*/
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};
person.greet();