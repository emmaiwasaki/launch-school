const utf16Value = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count += str.charCodeAt([i])
    }
    return count;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));

