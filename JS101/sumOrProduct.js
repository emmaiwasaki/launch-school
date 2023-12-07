const input = require('readline-sync');

console.log('please enter an integer greater than 0: ');
let int = input.prompt();

console.log('enter "s" to compute the sum, or "p" to compute the product: ');
let letter = input.prompt();

let sum = 0;
let product = 1;
if (letter === 's') {
    for (let i = 0; i <= int; i++) {
        sum += i
    }
    console.log(`the sum of the integers between 1 and ${int} is ${sum}`)
} else {
    for (let i = 1; i <= int; i++) {
        product *= i
    }
    console.log(`the product of the integers between 1 and ${int} is ${product}`)
}



