const isEven = (int) => {
    if (int % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const evenNums = () => {
    for (let i = 0; i <= 99; i++) {
        if (isEven(i) === false) {
            continue;
        } else {
            console.log(i)
        }
    }
}

console.log(evenNums())