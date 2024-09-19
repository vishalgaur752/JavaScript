//Ques : 1 Write JavaScript to get the first n elements of an array [n can be any positive number].
let num = [7, 9, 0, -2];
let n = 3;
console.log(num.slice(0, n));

//Ques : 2 Write a JavaScript program to get the last n element of an array. [n can any positive number].
let nums = [7, 9, 0, -2];
console.log(nums.slice(length - n));

//Ques : 3 Write a JavaScript program to check whether a string is blank or not.
// let str = prompt("enter a string name");
// if(str.length == 0) {
//     console.log("string is empty.")
// }

//Ques : 4 Write a JavaScript program to test whether the character at the given(charater) index is lower case.
// let name = "VISHALGAUR";
// let idx = 3;
// if(name[idx] == name[idx].toLowerCase()) {
//     console.log("character is lowercase");
// } else {
//     console.log("character is not lowercase");
// }

//Ques : 5 Write a JavaScript program to strip leading and trailing spaces from a string.
// let str = prompt("please enter a string");
// console.log(`original string = "${str}"`);
// console.log(`string without spaces = "${str.trim()}"`);

//Ques 6 : Write a JavaScript program to check if an element exists in an array or not.
let arr = [1, 2, 3, 4];
let item = 64;
if(arr.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("element does'nt exist in array");
}