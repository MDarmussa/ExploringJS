// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20% fair -> 15% bad -> 10%

// output:
// tipAmount(100, 'good')
// 20
// tipAmount(40, 'fair')
// 6

// solution


function tipAmount (tip, quality) {

     if (quality == "good") {
          return tip * 0.2;
     } else if (quality == "fair") {
          return tip * 0.15;
     } else if (quality == "bad") {
          return tip * 0.10;
     } else {
          return ("error");
     }

}

console.log (tipAmount(10, "fair"));