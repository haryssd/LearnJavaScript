// Data Analysis:
// 13. Calculate average rating from user reviews:

const reviews = [
    { userId: 1, rating: 5 },
    { userId: 2, rating: 4 },
    { userId: 3, rating: 3 }
];

const averageRating = reviews.reduce((acc, rate) => acc + rate.rating, 0) / reviews.length
console.log(averageRating)




// 14. Find the most common category in products:
const products = [
    { id: 1, category: "electronics" },
    { id: 2, category: "books" },
    { id: 3, category: "electronics" }
];

const result = products.reduce((acc, product) => {
    if (product.category === "electronics") {
        acc.electronics = acc.electronics + 1;
    } else if (product.category === "books") {
        acc.books = acc.books + 1;
    }
    return acc;
}, { electronics: 0, books: 0 });

console.log(result);
console.log("Most common category is:", result.electronics > result.books ? "Electronics" : "Books")