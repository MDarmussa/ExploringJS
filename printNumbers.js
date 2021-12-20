
// Print Numbers

// Write a function printNumbers which is given a start number and an end number.
//  It will print the numbers from one to the other, one per line:

//  Output:
//  printNumbers(1, 10)
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Solution


function printNumbers (num1, num2) {
     for (i = num1; i <= num2; i++) {
         console.log(i); 
     }
     return i;

};
console.log(printNumbers(1, 1));
printNumbers(1, 5); //Better way than console