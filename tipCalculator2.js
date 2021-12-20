//Tip Calculator 2

// Write a function totalAmount that takes the same arguments as tipAmount 
// except it returns the total as the tip amount plus the bill amount.
//  This function may make use of tipAmount as a sub-task.

// output

// totalAmount(100, 'good')
// 120
// totalAmount(40, 'fair')
// 46

// solution

function tipAmount(billAmount, quality) {

     if (quality === "good") {
          return billAmount * .2;
     } else if (quality === "fair") {
          return billAmount * .15;
     } else if (quality === "bad") {
          return billAmount * .10;
     } else 
          return ("error");
     }

     function totalAmount(billAmount, atip) {
          return billAmount + atip;
     }

console.log(totalAmount(30, tipAmount(30, "good")));