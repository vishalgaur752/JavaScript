// console.log("hello world");
// console.log("Vishal gaur");

// let a = 5;
// let b = 10;
// console.log(a + b);


//template litrals.
// let pencilprice = 10;
// let erosorprice = 5;
// let output = `The total price is ${pencilprice + erosorprice} Rupees.`;
// console.log(output);

//Arithmetic Operators
let a = 10;
let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//unary operator
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);

//Assigment Operator
//(=, +=, -=, *=, /=, %=, etc)

//comparison Operators
//(>, >=, <, <=, ==, !=)
//(===) Strickt Comparison

//Comparison for non-numbers
// console.log('a' > 'A');
// console.log('a' > 'b');
// console.log('b' < 'c');
// console.log('B' < 'C');
// console.log('*' < '&');
//these caharctors have their own unicode and compare unicodes not caharactor's

//Conditional Statements
// let firstName = 'vishal';
// if(firstName == 'vishal') {
//     console.log(`welcome ${firstName}`);
// }

//practice Qs. Create a traffic light system that shows what to do based on color.
// let color = "red";
// if(color === "red") {
//     console.log("Stop!")
// }
// if(color === "green") {
//     console.log("go");
// }
// if(color === "yellow") {
//     console.log("Slow down");
// }

// practice Qs : Create a system to calculate popcorn prices based on the size customer asked for :
//if size "XL" price is 250rs
//if size is "L", Price is 200rs
//if size is "M", Price is 100rs
//if size is "S", Price is 50rs
let size = 'L'
if(size == 'XL') {
    console.log("price : ", 250);
} else if (size === 'L') {
    console.log("price : ", 200);
} else if (size == 'M') {
    console.log("price : ",  100);
} else {
    console.log("price : ", 50);
}