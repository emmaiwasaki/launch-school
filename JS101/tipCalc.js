const input = require('readline-sync');

console.log('what is the bill? ');
let bill = input.prompt();

console.log('what is the tip percentage? ');
let tipPercent = input.prompt();
let tipDecimal = tipPercent / 100

let tip = bill * tipDecimal;
let total = (Number(bill) + Number(tip));

console.log(`the tip is ${tip.toFixed(2)}`)
console.log(`the total is ${total.toFixed(2)}`)