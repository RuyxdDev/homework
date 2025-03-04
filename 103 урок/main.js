
const person = {
    name: "Alex",
    age: 25,
    city: "New York",
    greet: function(name) {
        return `Hello "${name}"`;
    }
};

console.log(person.greet("John")); 

const users = [
    { name: "Alice", age: 30, isAdmin: false },
    { name: "Bob", age: 28, isAdmin: true },
    { name: "Charlie", age: 22, isAdmin: false },
    { name: "David", age: 35, isAdmin: false }
];


let regularUserCount = 0;


for (const user of users) {
    if (!user.isAdmin) {
        regularUserCount++;
    }
}


console.log("Количество простых пользователей:", regularUserCount);
