// Search and Filter Operations:
// 11. Search for users whose name or email contains a specific string:
const users = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" }
];

function searchUsers(users, searchTerm) {

    searchTerm = searchTerm.toLowerCase();
    return users.filter(user =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    )
}

console.log(searchUsers(users, "doe"));




//12. Filter orders within a date range:
const orders = [
    { id: 1, date: "2024-01-01", total: 50 },
    { id: 2, date: "2024-01-15", total: 100 },
    { id: 3, date: "2024-02-01", total: 75 }
];

function filterOrder(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return orders.filter(a => {
        const orderDate = new Date(a.date);

        return orderDate >= start && orderDate <= end;
    })
}

// Example 1: Filter orders in January
console.log("Orders in January:");
console.log(filterOrder("2024-01-01", "2024-01-31"));

// Example 2: Filter orders in first half of January
console.log("\nOrders in first half of January:");
console.log(filterOrder("2024-01-01", "2024-01-15"));




// a. Find all transactions within a specific amount range
const transactions = [
    { id: 1, amount: 50, type: "debit" },
    { id: 2, amount: 150, type: "credit" },
    { id: 3, amount: 75, type: "debit" }
];
// Find transactions between $50 and $100
const newTransaction = transactions.filter(a =>
    a.amount >= 50 && a.amount <= 100
)
console.log(newTransaction)




// b. Search for products by multiple criteria:
const products = [
    { id: 1, name: "Gaming Laptop", category: "electronics", inStock: true, price: 1200 },
    { id: 2, name: "Coffee Maker", category: "appliances", inStock: false, price: 80 },
    { id: 3, name: "Gaming Mouse", category: "electronics", inStock: true, price: 50 }
];
// Find all in-stock electronics under $100
const newProducts = products.filter(a => a.inStock === true && a.category == "electronics" && a.price < 100)
console.log(newProducts)




// c. Filter active users with specific roles:
const users2 = [
    { id: 1, name: "John", role: "admin", active: true },
    { id: 2, name: "Jane", role: "user", active: true },
    { id: 3, name: "Bob", role: "admin", active: false }
];
// Find all active admins
const newUsers2 = users2.filter(a => a.active == true && a.role === "admin")
console.log(newUsers2)




// d. Search messages by content and date:
const messages = [
    { id: 1, text: "Hello team", date: "2024-01-15", sender: "John" },
    { id: 2, text: "Meeting tomorrow", date: "2024-01-16", sender: "Jane" },
    { id: 3, text: "Hello everyone", date: "2024-01-16", sender: "Bob" }
];
// Find messages containing "Hello" from specific date
function findMessage(text, date) {
    text = text.toLowerCase()

    return messages.filter(a =>
        a.text.toLowerCase().includes(text) && a.date == date
    )
}

console.log(findMessage("Hello", "2024-01-15"))




// e. Filter orders by status and customer:
const orders5 = [
    { id: 1, customer: "John", status: "pending", total: 100 },
    { id: 2, customer: "John", status: "delivered", total: 150 },
    { id: 3, customer: "Jane", status: "pending", total: 200 }
];
// Find all pending orders for John
const newOrders5 = orders5.filter(a => a.customer === "John" && a.status === "pending")
console.log(newOrders5)