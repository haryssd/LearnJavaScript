// Error Handling and Validation:
// 19. Merge data from two different API responses:
const users = [{ id: 1, name: "John" }];
const orders = [{ userId: 1, total: 100 }];
// Merge to get user with their orders
const data = users.map(a => {
    const useOrder = orders.filter(b => b.userId === a.id)
    return { ...a, orders: useOrder }
})
console.log(data)




// 20. Compare two arrays and find changes:
const oldData = [{ id: 1, status: "active" }, { id: 2, status: "inactive" }];
const newData = [{ id: 1, status: "inactive" }, { id: 3, status: "active" }];

// Find updated items (same id, different status)
const updatedItems = oldData.filter(a => {
    const newItem = newData.find(b => b.id === a.id)
    return newItem && newItem.status !== a.status
})
console.log(updatedItems)


//Find added Items (in newData but not in oldData)
const addedItems = newData.filter(newItem => !oldData.some(oldItem => oldItem.id === newItem.id))
console.log(addedItems)


// Find removed items (in oldData but not in newData)