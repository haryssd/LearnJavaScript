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