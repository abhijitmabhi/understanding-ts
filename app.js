function add(n1, n2, printResult, phrase) {
    var result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    }
    return result;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phrase = "Result is: ";
add(number1, number2, printResult, phrase);
