const isOdd = (int) => {
    if (int % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

const oddNums = () => {
    for (let i = 0; i <= 99; i++) {
        if (isOdd(i) === false) {
            continue;
        } else {
            console.log(i)
        }
    }
}
