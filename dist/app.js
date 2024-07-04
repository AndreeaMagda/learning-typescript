"use strict";
//arrow functions
// const addNumb = (a: number, b: number) => a + b
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output)
// const button = document.querySelector('button')
// if (button) {
//   button.addEventListener('click', (event) => console.log(event))
// }
// printOutput(addNumb(5, 2))
//rest parameters
const addNumbers = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addNumbers(5, 2, 8, 7, 2, 8);
console.log(addedNumbers);
