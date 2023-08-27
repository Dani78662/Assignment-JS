// Check if input variable is a number or not.
// 1. Print “Variable is not a number” if isNaN() returns true.
// 2. Else print “Variable is a valid number” if isNaN() returns false.



function checkIfNumber(variable){
if(isNaN(variable)){
    console.log("variable is not a number");
}
else {
    console.log("variable is a  number");
}
}
checkIfNumber(36);
checkIfNumber("Dani");