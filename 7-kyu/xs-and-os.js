/*
Name: Exes and Ohs
Link: https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
Description: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

const XO = (str) => {
    const arr = str.toLowerCase().split("");

    return arr.filter(char => char === "o").length  ===
            arr.filter(char => char ==="x").length
}

const XO2 = (str) => {
    let x = 0;
    let o = 0;

    for (char of str.toLowerCase()) {
        if (char === "x") {
            x++
        }
        if (char === "o") {
            o++
        }
    }
    return x === o
}

console.log(XO2("xxxm"));