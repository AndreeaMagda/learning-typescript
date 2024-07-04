function add_fc(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result  ' + num);
}
printResult(add_fc(2, 32));
var combineValues;
combineValues = add_fc;
console.log(combineValues(45, 8));
