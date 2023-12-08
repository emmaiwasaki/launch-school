const multiSum = (num) => {
    let count = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            count+= i
        }
    }
    return count;
}

console.log(multiSum(20));
console.log(multiSum(3));
console.log(multiSum(5));
console.log(multiSum(10));
console.log(multiSum(1000));


