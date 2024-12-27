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

//let say most popular post is determined by total of likes.
// Find highest number of likes
const maxLikes = Math.max(...posts.map(post => post.likes));
const popularPostsInfo = posts.filter(post => post.likes === maxLikes).map(a => ({
    content: a.content,
    likes: a.likes
}))

console.log(popularPostsInfo)




// 6. Student Grade Analysis:
const studentGrades = [
    { studentId: 1, name: "John", grades: [85, 90, 92, 88, 87] },
    { studentId: 2, name: "Jane", grades: [92, 95, 89, 91, 90] },
    { studentId: 3, name: "Bob", grades: [78, 85, 80, 82, 79] }
];
// Calculate average grades, identify top performers, and find students needing improvement

//Average Grades
const studentAverages = studentGrades.map(a => {
    const sumOfGrade = a.grades.reduce((acc, grade) => acc + grade, 0)
    const average = sumOfGrade / a.grades.length

    return {
        name: a.name,
        averageGrade: average
    }
})
console.log(studentAverages);


//Top Performer
const topPerformer = studentGrades.filter(a => {
    const sumOfGrade = a.grades.reduce((acc, grade) => acc + grade, 0)
    const average = sumOfGrade / a.grades.length

    if (average > 90) {
        return true
    }
})
console.log(topPerformer)
//or
const topPerformer2 = studentGrades.filter(b => {
    const sumOfGrade = b.grades.reduce((acc, grade) => acc + grade, 0)
    const average = sumOfGrade / b.grades.length

    if (average > 90) {
        return true
    }
}).map(a => a.name)
console.log(topPerformer2)


//find students needing improvement (by means his average is the lowest)
const minAverage = Math.min(...studentGrades.map(student =>
    student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length
))
console.log(minAverage);

const lowPerformer = studentGrades.filter(student => {
    const average = student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length
    return average === minAverage
}).map(a => a.name)
console.log(lowPerformer)




// 6. Restaurant Order System:
const restaurantOrders = [
    {
        orderId: "O123",
        table: 5,
        items: [
            { name: "Pasta", quantity: 2, price: 15, category: "main" },
            { name: "Salad", quantity: 1, price: 8, category: "starter" },
            { name: "Wine", quantity: 2, price: 12, category: "beverage" }
        ],
        status: "served",
        orderTime: "2024-01-15T18:30:00",
        paymentStatus: "completed"
    },
    {
        orderId: "O124",
        table: 3,
        items: [
            { name: "Steak", quantity: 1, price: 25, category: "main" },
            { name: "Soup", quantity: 1, price: 7, category: "starter" },
            { name: "Beer", quantity: 1, price: 6, category: "beverage" }
        ],
        status: "preparing",
        orderTime: "2024-01-15T18:45:00",
        paymentStatus: "pending"
    }
];
// Create a daily sales report showing revenue by category, popular items, and table turnover metrics
const revenueCategory = restaurantOrders.reduce((acc, order) => {
    order.items.forEach(item => {
        if (!acc[item.category]) {
            acc[item.category] = 0;
        }
        acc[item.category] += item.price;
    });
    return acc
}, {})
console.log(revenueCategory)


//Popular Items (by looking at each item's quantity across all orders)
const popularItem = restaurantOrders.reduce((acc, order) => {

    order.items.forEach(item => {
        if (!acc[item.name]) {
            acc[item.name] = 0
        }
        acc[item.name] += item.quantity
    })

    return acc
}, {})

console.log(popularItem)

