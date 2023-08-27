// ODD 2 4 6 8
// EVEN 1 3 5 7

//  Check if a number is odd or even in JavaScript.
// 1. Print “Number is even” if the number is divisible by 2.
// 2. Else print “Number is odd” if the number returns a remainder
// when divided by 2.

function printOddEven(number){
if(number % 2 === 0) {
return "Even";
}
else {
    return "odd";
}
}
var result = printOddEven(4);
console.log(result);
