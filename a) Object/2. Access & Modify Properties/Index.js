//Q4: Given an object book with properties title and author, write code to change the title to "JavaScript Fundamentals".

const book = {
    title: "Wizard of OZ",
    author: "Henry"
};

book.title = "JavaScript Fundamentals";
console.log(book);


// Q5: Create an object phone with nested properties for specifications (like screen size, RAM, storage). Then access the RAM value.

const phone = {
    screenSize: { 
        inch: 6.7,
    },
    RAM: {
        gigabyte: 32,
    },
    storage: {
        gigabyte: 256,
    }
};

const access = phone.RAM.gigabyte;
console.log(access);


// Q6: Write code to add a new property price to an existing object product.

const product = {
    name: "Iphone 16"
};

product.price = 800;
console.log(product);


// Q7: Create an object computer and demonstrate three different ways to access its properties.