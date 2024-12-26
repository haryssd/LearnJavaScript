
// Q5.  Transform an array of API user data into a specific format for your frontend:
const apiUsers = [
    { user_id: 1, first_name: "John", last_name: "Doe" },
    { user_id: 2, first_name: "Jane", last_name: "Smith" }
];
// Transform to: [{id: 1, fullName: "John Doe"}, ...]
let newApiUsers = apiUsers.map(a => ({
    id: a.user_id,
    fullname: `${a.first_name} ${a.last_name}`
}))
console.log(newApiUsers)




// Q6: Group an array of orders by user ID:
const orders = [
    { orderId: 1, userId: 101, total: 50 },
    { orderId: 2, userId: 102, total: 100 },
    { orderId: 3, userId: 101, total: 75 }
];

const groupedOrder = orders.reduce((acc, order) => {
    acc[order.userId] = acc[order.userId] || [];
    acc[order.userId].push(order);
    return acc;
}, {});
console.log(groupedOrder);




// Q7: Calculate total revenue from an array of orders:
const orders2 = [
    { id: 1, total: 50 },
    { id: 2, total: 100 },
    { id: 3, total: 75 }
];

let totalRevenue = 0;
for (let ord of orders2) {
    totalRevenue += ord.total
}
console.log(totalRevenue)

// Alternative using reduce
const totalRevenue3 = orders2.reduce((sum, order) => sum + order.total, 0);
//or
const totalRevenue2 = orders2.reduce((sum, order) => { return sum + order.total }, 0);
console.log(totalRevenue2);



// Q8: Find the latest order for each user:
const orders3 = [
    { userId: 1, date: "2024-01-01", total: 50 },
    { userId: 1, date: "2024-01-02", total: 100 },
    { userId: 2, date: "2024-01-01", total: 75 }
];

const latestOrders = Object.values(orders3.reduce((acc, order) => {
    if (!acc[order.userId] || acc[order.userId].date < order.date) {
        acc[order.userId] = order;
    }
    return acc;
}, {}));

console.log(latestOrders);



//a: Transform user addresses for a shipping label:
const users = [
    { firstName: "John", lastName: "Doe", street: "123 Main St", city: "Boston", state: "MA", zip: "02101" },
    { firstName: "Jane", lastName: "Smith", street: "456 Park Ave", city: "New York", state: "NY", zip: "10001" }
];
// Transform to: ["John Doe, 123 Main St, Boston, MA 02101", ...]
let newUsers = users.map(a => {
    return `${a.firstName} ${a.lastName}, ${a.street}, ${a.city}, ${a.state} ${a.zip}`
})

console.log(newUsers);




//b:Format phone numbers in an array:
const contacts = [
    { name: "John", phone: "1234567890" },
    { name: "Jane", phone: "9876543210" }
];
// Transform to format: (123) 456-7890
let newContact = contacts.map(a => {
    const phone = a.phone;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
})
console.log(newContact)




//c.Calculate order summaries by month:
const orders4 = [
    { date: "2024-01-15", total: 100 },
    { date: "2024-01-20", total: 150 },
    { date: "2024-02-10", total: 200 },
    { date: "2024-02-15", total: 250 }
];
// Group by month with total amount and count
let orderSummaries = orders4.reduce((acc, order) => {
    const month = order.date.substring(0, 7); // Gets "2024-01" from "2024-01-15"
    if (!acc[month]) {
        acc[month] = {
            totalAmount: 0,
            count: 0
        };
    }

    acc[month].totalAmount += order.total;
    acc[month].count += 1;

    return acc;
}, {})
console.log(orderSummaries)




// d. Convert product prices to different currency:
const products = [
    { id: 1, name: "Phone", price_usd: 999 },
    { id: 2, name: "Laptop", price_usd: 1999 }
];
// Convert USD to EUR (assume rate: 1 USD = 0.85 EUR)

let newConvert = products.map(a => ({
    id: a.id,
    name: a.name,
    price: (a.price_usd * 0.85).toFixed(2)
}))
console.log(newConvert)