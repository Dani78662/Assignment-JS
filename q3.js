// Find the largest of two number.
// 1. Print num1 is the largest if num1>num2.
// 2. Print num2 is the largest if num1<num2.
// 3. Else print num1 and num2 are equal when num1==num2


function printLargest(num1,num2){
    if(num1>num2){
        return "num1 is largest";
    }
    else if(num2>num1 ){
        return "num2 is largest";
    }
    else {
        return "num1 and num2 are equal";
    }

}
var result = printLargest(4,3);
console.log(result);
