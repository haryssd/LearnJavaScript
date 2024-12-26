//Array Updates (Common in State Management):
// 9. Add a new property to all objects in an array:
const products = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" }
];
// Add 'category: "electronics"' to all

let newProducts = products.map(a => ({
    id: a.id,
    name: a.name,
    category: 'electronic'
}))
console.log(newProducts)

let newProducts2 = products.map(a => ({
    ...a,
    category: 'electronic'
}))
console.log(newProducts2)



//10. Update the status of a specific item in an array:
const todos = [
    { id: 1, task: "Code", completed: false },
    { id: 2, task: "Test", completed: false }
];
// Mark todo with id 1 as completed
let todos2 = todos.map(a => {
    if (a.id === 1) {
        return { ...a, completed: true }
    }
    return a
})
console.log(todos2)




// a. Update the stock quantity for specific products:
const products2 = [
    { id: 1, name: "iPhone", stock: 5 },
    { id: 2, name: "Samsung", stock: 8 },
    { id: 3, name: "Pixel", stock: 3 }
];
// Update iPhone stock to 10

let newProducts3 = products2.map(a => {
    if (a.name === "iPhone") {
        return { ...a, stock: 10 }
    }
    return a;
})
console.log(newProducts3)



// b. Mark all overdue tasks as urgent:
const tasks = [
    { id: 1, title: "Report", dueDate: "2024-01-15", urgent: false },
    { id: 2, title: "Meeting", dueDate: "2024-01-20", urgent: false },
    { id: 3, title: "Review", dueDate: "2024-01-10", urgent: false }
];
// Mark tasks with past due dates as urgent

const todayDate = new Date("2024-01-15")
const updatedTask = tasks.map(a => {
    dueDate = new Date(a.dueDate)

    if (dueDate < todayDate) {
        return { ...a, urgent: true }
    }
    return a;
})
console.log(updatedTask)



// c. Add a discount property to all products over $100:
const products5 = [
    { id: 1, name: "Headphones", price: 150 },
    { id: 2, name: "Charger", price: 50 },
    { id: 3, name: "Speaker", price: 200 }
];
// Add 10% discount to expensive item
const updatedProducts = products5.map(a => {
    if (a.price > 100) {
        const discountAmount = a.price * 0.1;
        return { ...a, discount: "10%", discountAmount: discountAmount, finalPrice: a.price - discountAmount }
    }
    return a

})
console.log(updatedProducts)



// d. Update user subscription status:
const users = [
    { id: 1, name: "John", subscription: "basic" },
    { id: 2, name: "Jane", subscription: "basic" },
    { id: 3, name: "Bob", subscription: "pro" }
];
// Upgrade John's subscription to "pro"

let updatedUsers = users.map(a => {
    if (a.name === "John") {
        return { ...a, subscription: "pro" }
    }
    return a
})
console.log(updatedUsers)