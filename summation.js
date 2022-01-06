// Activity - Sum of Given Integers
// Write a JavaScript program to compute the sum of the two given integers, 
//If the sum is in the range 50..80 return 65 other wise return 80

//solve
// define a function with two parameters num1 & num2
// while (num1+num2) > 50 || (num1+num2) < 80; return 65
//else return 80

function summation(num1, num2) {
     const totalSum = num1 + num2;
     if(totalSum >= 50 && totalSum <= 80) {
          return 65;
     }  
          return 80;
     }
console.log(summation(40, 90));
