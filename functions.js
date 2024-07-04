function add_fc(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result  ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add_fc(2, 32));
//whatever we store here, has to be a function that takes two numbers and returns a number
var combineValues;
combineValues = add_fc;
//combineValues=printResult -ERROR
console.log(combineValues(45, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
