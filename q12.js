// Using for loop output the array elements in reverse order.
// let arr = [1,2,3,4,5];
// Output → [5,4,3,2,1];


let arr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log(reversedArr); 
