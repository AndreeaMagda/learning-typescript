"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult == true) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.6;
const showResult = true;
const resultphrase = 'result is: ';
add(number1, number2, showResult, resultphrase);
