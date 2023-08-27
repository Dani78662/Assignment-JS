// Find the largest of three number.
// 1. Print num1 is the largest if num1>num2 and num1>num3.
// 2. Print num2 is the largest if num2<num3.
// 3. Else print num3.


function printLargest(num1,num2,num3){
    if(num1>num2 && num1 > num3){
        return "num1 is largest";
    }
    else if(num2 > num3){
        return "num2 is largest";
    }
    else {
        console.log("num 3 is largest");
    }

}
var result = printLargest(4,3,2);
console.log(result);
