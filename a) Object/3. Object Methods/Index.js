// Q8: Create an object calculator with methods for add, subtract, multiply, and divide.

const calculator = {
    add: function (num1, num2){
        return num1 + num2;
    },

    subtract: function (num1, num2){
        return num1 - num2;
    },

    multiply: function (num1, num2){
        return num1*num2;
    },

    divide: function (num1, num2){
        if (num1 < num2){
            return "First number is less than second number";
        }
        if (num2 === 0) {
            return "Second number cannot be zero";
        }
        return num1/num2;
    },
};

console.log(calculator.add(2,2));
console.log(calculator.subtract(5,3));
console.log(calculator.multiply(3,3));
console.log(calculator.divide(2,3));
console.log(calculator.divide(10, 0));
console.log(calculator.divide(8,2));


// Q9: Create an object person with a method that returns a greeting using the person's name property.

const person = {
    name: "Haris",

    greeting: function(){
        return `Hello ${this.name}`;
    }
}

console.log(person.greeting("Haris"));


// Q10: Write an object timeConverter with a method that converts minutes to hours and minutes.

const timeConverter = {
    converToHour: function(num) {
        const hour = Math.floor(num / 60);
        const min = num % 60;

        return `Hours = ${hour}, Minutes = ${min}`;
    }
}
console.log(timeConverter.converToHour(120));


// Q11. Create an object counter with a method that increments a count property using the 'this' keyword.

const counter = {
    count: 0,

    increment: function (){
        this.count += 1;
    }
}

// For a counter object, the increment method typically shouldn't need to return anything - its main job is to modify the count. 

counter.increment();
console.log(counter.count);
counter.increment();
console.log(counter.count);


// Q12: Create an object user with properties firstName and lastName, and a method that returns the full name using 'this'.

const user = {
    firstName: "Haris",
    lastName: "Noh",

    fullName: function() {
        return `My full name is ${this.firstName} ${this.lastName}`;
    }
}
console.log(user.fullName());
