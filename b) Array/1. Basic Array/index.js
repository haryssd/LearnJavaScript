// Q1: Remove duplicate values from an array of user IDs:
const userIds = [101, 102, 103, 101, 104, 102];

const newUserIds = [...new Set(userIds)];
console.log(newUserIds);



// Q2: Filter out all inactive users (where status is false) from an array of user objects:
const users = [
    { id: 1, name: "John", status: true },
    { id: 2, name: "Jane", status: false },
    { id: 3, name: "Bob", status: true }
];

let newUsers = users.filter(user => user.status === true)
console.log(newUsers)



// Q3: Find all products with price greater than $100 and are in stock:
const products = [
    { id: 1, name: "Phone", price: 500, inStock: true },
    { id: 2, name: "Laptop", price: 1000, inStock: false },
    { id: 3, name: "Book", price: 20, inStock: true }
];

for (let pro of products) {
    if (pro.price > 100 && pro.inStock === true) {
        console.log(pro)
    }
}

let newProducts = products.filter(prod => prod.price > 100 && prod.inStock)
console.log(newProducts)



// Q4: Sort an array of user objects by their name:
const users2 = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
];

users2.sort((a, b) => a.name.localeCompare(b.name))
console.log(users2)