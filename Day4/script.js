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
for (let i = 1; i<=3; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 1; j<=3; j++) {
        console.log(j);
    }
}