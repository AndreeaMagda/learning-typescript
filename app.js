function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult == true) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.6;
var showResult = true;
var resultphrase = 'result is: ';
add(number1, number2, showResult, resultphrase);
