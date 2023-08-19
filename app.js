// function reverseString(str) {
//   let reversed = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }

// const originalString = 'Hello, World!';
// const reversedString = reverseString(originalString);
// console.log(reversedString); 

// function countVowels(str) {
//     str = str.toLowerCase();
  
//     let vowelCount = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         vowelCount++;
//       }
//     }
  
//     return vowelCount;
//   }
  
//   const inputString = 'Hello, Dani!';
//   const numberOfVowels = countVowels(inputString);
//   console.log(`Number of vowels: ${numberOfVowels}`);

// function capitalizeWords(sentence) {
//     const words = sentence.split(' ');
  
//     const capitalizedWords = words.map(word => {
//       if (word.includes("'")) {
//         const parts = word.split("'");
//         return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join("'");
//       } else {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       }
//     });
  
//     const capitalizedSentence = capitalizedWords.join(' ');
  
//     return capitalizedSentence;
//   }
  
//   const inputSentence = "hello dani ";
//   const capitalized = capitalizeWords(inputSentence);
//   console.log(capitalized);


// function checkPalindrome(string) {

//     const len = string.length;

//     for (let i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// const string = prompt('Enter a string: ');

// const value = checkPalindrome(string);

// console.log(value);
  
// function sumPositiveNumbers(arr) {
//     let sum = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         sum += arr[i];
//       }
//     }
  
//     return sum;
//   }
  
//   const numbers = [3, -2, 5, -1, 8];
//   const positiveSum = sumPositiveNumbers(numbers);
//   console.log(`Sum of positive numbers: ${positiveSum}`);

// function findIndex(array, targetElement) {
//     return array.indexOf(targetElement);
//   }
  
//   const numbers = [3, 6, 9, 12, 6, 15];
//   const target = 6;
//   const index = findIndex(numbers, target);
  
//   if (index !== -1) {
//     console.log(`The first occurrence of ${target} is at index ${index}.`);
//   } else {
//     console.log(`${target} is not found in the array.`);
//   }

// function removeDuplicates(arr) {
//     const uniqueArray = [];
    
//     for (let i = 0; i < arr.length; i++) {
//       if (uniqueArray.indexOf(arr[i]) === -1) {
//         uniqueArray.push(arr[i]);
//       }
//     }
    
//     return uniqueArray;
//   }
  
//   const numbers = [1, 2, 2, 3, 4, 4, 5];
//   const uniqueNumbers = removeDuplicates(numbers);
//   console.log(uniqueNumbers); 

// function bubbleSortDescending(arr) {
//     const n = arr.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//   }
  
//   const numbersDescending = [64, 34, 25, 12, 22, 11, 90];
//   bubbleSortDescending(numbersDescending);
//   console.log("Descending Order:", numbersDescending);

// let number = 2; 

// while (number <= 20) { 
//   console.log(number);
//   number += 2; 
// }

function calculateFactorial(n) {
    let factorial = 1;
    let i = 1;
  
    do {
      factorial *= i;
      i++;
    } while (i <= n);
  
    return factorial;
  }
  
  const number = 5;
  const result = calculateFactorial(number);
  console.log(`The factorial of ${number} is ${result}`);
  

  
  
  
  
  
