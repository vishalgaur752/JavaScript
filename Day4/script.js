// for(let i = 1; i<=5; i++) {
//     console.log(i);
// }

// print all odd nubers (1 to 15)
// for(let i = 1; i<=15; i++) {
//     if(i % 2 != 0) {
//         console.log(i);
//     }
// }

//print all even number (2 to 10)
// for(let i = 2; i<= 10; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

//print the multiplication table of 5
// for (let i = 1; i<=10; i++) {
//     console.log(`5 * ${i} = `, 5 * i);
// }

// let n = prompt("write your number");
// n = parseInt(n);
// for (let i = n; i<=n*10; i =  i+n) {
//     console.log(i);
// }

//nested loops
// for (let i = 1; i<=3; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j<=3; j++) {
//         console.log(j);
//     }
// }

//while loop
// let i = 1;
// while(i<=5) {
//     console.log(i);
//     i++;
// }

//print the multiplication table of 5
// let n = prompt("write a number");
// n = parseInt(n);
// let i = n;
// while (i <= n*10) {
//     console.log(i);
//     i = i+n;
// }

//print 0 to 20 number by while loop
// let i = 0;
// while(i <= 20) {
//     console.log(i);
//     i++;
// }

//Favorite movie
// let favMovie = "avator";
// let guess = prompt("write a movie name");
// while ((guess != favMovie)&&(guess != 'quit')) {
//     guess = prompt("wronge gues. plese try again.")
// }
// if( guess == favMovie) {
// console.log("congrats!!");
// } else {
//     console.log("it's okk")
// }

//break keyword
// let i = 1;
// while(i<=3){
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// loops with array
// let fruits = ["mango", "apple", "banana", "litchi", "Orange"];
// for(let i = 0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

//loops loops with nesred arrays
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for(let i = 0; i<heroes.length; i++) {
//     console.log(`List #${i}`);
//     for(let j = 0; j<heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }

let student = [
  ["vishal", 95],
  ["namrata", 99],
  ["karan", 90]
];
for (let i = 0; i < student.length; i++) {
  console.log(`student no #${i + 1}`);
  for (let j = 0; j < student[i].length; j++) {
    console.log(student[i][j]);
  }
}

//check prime number
let n = prompt("Enter a number");
n = parseInt(n);
let isPrime = true;
if (n == 1) {
  isPrime = false; // 1 is not a prime
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if(isPrime) {
    console.log(`${n} is a prime number.`);
} else {
    console.log(`${n} is not a prime number.`)
}
