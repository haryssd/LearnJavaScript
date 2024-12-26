//Q13. Write code to check if a property 'email' exists in an object user.

const user = {
    name: "Haris",
    email: "haryssd36@gmail.com",
};

console.log (user.hasOwnProperty("email"));

// other ways to check if a property exists:
console.log("email" in user);  // Using in operator
console.log(user.email !== undefined);  // Checking if undefined
console.log(user?.email != null); // Optional chaining (newer syntax)


//Q14. Create two objects and write code to merge them into a new object.
let users = {
    name: "Haris",
    age: 23
};

let job = {
    position: "Sofware Developer",
};

let conclusion = {
    ...users,
    ...job
}
console.log(conclusion);


//Q15: Create an object and demonstrate how to delete one of its properties

let software = {
    code1: "Java",
    code2: "C++",
    code3: "Phython"
}

console.log(software);
delete software.code2;
console.log(software);