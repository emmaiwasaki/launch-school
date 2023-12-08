const shortLongShort = (str1, str2) => {
    let shortStr = '';
    let longStr = '';

    if (str1.length < str2.length) {
        shortStr = str1
        longStr = str2
    } else {
        shortStr = str2
        longStr = str1
    }

    return shortStr + longStr + shortStr
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));