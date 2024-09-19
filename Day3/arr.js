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
// let start = ["jan", "july", "march", "aug"];
// start.shift();
// start.shift();
// start.unshift("june");
// start.unshift("july");
// console.log(start);


//Cancat : Merge two Arrays
// let primary = ["red", "yellow", "blue"];
// let secondary = ["orange", "green", "voilet"];
// primary = primary.concat(secondary);
// console.log(primary);
// console.log(primary.reverse());//reverse an array



//slice in array
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2, 3));
// console.log(colors.slice(-2));


// spice in arrays
// let color  = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(color.splice(2));
// color.splice(4);


//sort in arrays
// color.sort();

//ques 1 : For given start state of an array, change it to fnal form using splice.
// let start = ["january", "july", "march", "august"];
// start.splice(0, 2, "july", "june");
// console.log(start);

//Ques 2 : Return the index of the "javScript" from the given, if it was reversed.
// let proLang = ["c", "c++", "html", "javaScript", "python", "java", "c#", "sql"];
// console.log(proLang.reverse().indexOf("javaScript"));

//Array References
// let arr = ['a', 'b'];
// let arrCopy = arr;
// arrCopy;

// Constant Array
// const arr = [1, 2, 3];
// arr = [1, 2, 3, 4];
// console.log(arr)

//Nested Arrays
// let nums = [[1, 2], [5, 4, 5, 8], [7, 5]];
// console.log(nums)

//Ques : Create a nested array to show the following tic-tac-toe game state.
// let game = [['X' , '', 'O'], [ '', 'X', ''], ['O', '', 'X']];
// console.log(game);