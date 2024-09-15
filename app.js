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
// let size = 'L'
// if(size == 'XL') {
//     console.log("price is Rs. 250");
// } else if (size === 'L') {
//     console.log("price is Rs. 200");
// } else if (size == 'M') {
//     console.log("price is Rs. 100");
// } else {
//     console.log("price is Rs. 50");
// }

// Logical Operators
//&& Logical And
//|| logical OR
// ! Logical Not


// Practice Qs : A "good String" is a String with the letter 'a' & has a length > 3. Write a Program to find if a string or not.
// let str = "apple";
// if((str[0] === 'a') && (str.length > 3)) {
//     console.log("good String");
// } else {
//     console.log("not a good String");
// }


//Switcth Statement
let color = "yellow";
switch(color) {
    case "red" :
        console.log("Stop");
        break;
    case "yellow" :
        console.log("go Slow");
        break;
    case "green" :
        console.log("GO");
        break;
    default :
        console.log("Broken Light");    
}