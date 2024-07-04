"use strict";
//arrow functions
const addNumb = (a, b) => a + b;
const printOutput = (output) => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => console.log(event));
}
printOutput(addNumb(5, 2));
