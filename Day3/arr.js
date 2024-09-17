// let students = ["aman", "vishal", "sudc"];
// console.log(students);
// console.log(students[0]);
// console.log(students.length);  

// let nums = [2, 4, 6, 8];


//Arrays are mutable
// let fruits = ["mango", "apple", "litchi"];
// fruits[0] = "banana";
// console.log(fruits);


//Array Methods
//push(add to end), unshift(add to start), pop(delete from end & returns it) and shift(delete from start & returns it).
// let cars = ["audi", "bmw", "XUV", "alto"];
// let followers = ["a","b","c"];
// let blocked = followers.shift();
// console.log(followers);
// console.log(blocked);


//Ques 1 For the giver start state of an array, change it to final form using methods.
//start = ["jan", "july", "march", "aug"]
//final = ["july", "june", "march", "aug"]

let start = ["jan", "july", "march", "aug"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);
