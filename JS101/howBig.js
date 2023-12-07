const input = require('readline-sync');

console.log('enter the length of the room in meters: ')
let length = input.prompt();

console.log('enter the width of the room in meters: ')
let width = input.prompt();
let areaMeters = (length * width)
let areaSquareFeet = areaMeters * 10.7639


console.log(`the area of the room is ${areaMeters.toFixed(2)} square meters (${areaSquareFeet.toFixed(2)} square feet)`);