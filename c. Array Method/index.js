// 1. Transform and Calculate (map and reduce):
const orders = [
    { id: 1, items: ["shirt", "shoes"], total: 50 },
    { id: 2, items: ["hat", "socks", "shoes"], total: 75 },
    { id: 3, items: ["shirt"], total: 30 }
];
// Calculate total revenue AND count total items sold

const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0)
console.log(totalRevenue);

const totalItemSold = orders.reduce((acc, order) => acc + order.items.length, 0)
console.log(totalItemSold)
// or
const totalItem = orders.map(a => a.items.length).reduce((acc, count) => acc + count, 0)
console.log(totalItem)




// 2. Filter and Transform (filter and map):
const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics" },
    { id: 2, name: "Book", price: 19, category: "Books" },
    { id: 3, name: "Phone", price: 599, category: "Electronics" }
];
// Get names of all electronics over $500
const updatedProducts = products.filter(a => a.category === "Electronics" && a.price > 500).map(b => b.name)
console.log(updatedProducts)




// 3. Advanced Search (find and filter):
const users = [
    { id: 1, name: "John", orders: [{ id: 1, total: 30 }, { id: 2, total: 50 }] },
    { id: 2, name: "Jane", orders: [{ id: 3, total: 100 }] },
    { id: 3, name: "Bob", orders: [] }
];
// Find users with orders totaling more than $75

const newUser = users.filter(a => {
    const totalOrders = a.orders.reduce((acc, order) => acc + order.total, 0)
    return totalOrders > 75;
})
console.log(newUser)




// 4. E-commerce Order Processing:
const orders2 = [
    {
        id: 1,
        customerName: "John",
        items: [
            { productId: 1, price: 50, quantity: 2 },
            { productId: 2, price: 30, quantity: 1 }
        ],
        status: "pending"
    },
    {
        id: 2,
        customerName: "Jane",
        items: [
            { productId: 1, price: 50, quantity: 1 },
            { productId: 3, price: 80, quantity: 3 }
        ],
        status: "completed"
    }
];
// Calculate total revenue 
const totalRevenue2 = orders2.reduce((acc, order) => {
    const totalOrder = order.items.reduce((itemSum, item) => {
        const total = item.price * item.quantity
        return itemSum + total
    }, 0)

    return acc + totalOrder
}, 0)
console.log(totalRevenue2)

// Find best-selling products
const productSales = orders2.reduce((acc, order) => {
    order.items.forEach(item => {
        acc[item.productId] = (acc[item.productId] || 0) + item.quantity;
    });
    return acc;
}, {});
console.log(productSales)




// 5. Social Media Post Analytics:
const posts = [
    { id: 1, content: "Hello World", likes: 10, comments: 2, shares: 3, date: "2024-01-15" },
    { id: 2, content: "Great news!", likes: 25, comments: 5, shares: 8, date: "2024-01-15" },
    { id: 3, content: "JavaScript tips", likes: 15, comments: 4, shares: 2, date: "2024-01-16" }
];
// Generate engagement report showing most popular posts and daily engagement stats




// 6. Student Grade Analysis::
const studentGrades = [
    { studentId: 1, name: "John", grades: [85, 90, 92, 88, 87] },
    { studentId: 2, name: "Jane", grades: [92, 95, 89, 91, 90] },
    { studentId: 3, name: "Bob", grades: [78, 85, 80, 82, 79] }
];
// Calculate average grades, identify top performers, and find students needing improvement