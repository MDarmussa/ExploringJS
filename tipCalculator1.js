// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20% fair -> 15% bad -> 10%

// output:
// tipAmount(100, 'good')
// 20
// tipAmount(40, 'fair')
// 6

// solution


function tipAmount(bill, quality) {
     if(quality == "good"){
          return (` the tip is: $${bill * 1.20}`);
     } else if (quality == "fair") {
          return (` the tip is: $${bill * 1.15}`);
     } else if (quality == "bad"){
          return (` the tip is: $${bill * 1.10}`);
     } else {
          return 'zero Dollar'
     }
}

console.log(tipAmount(100, 'good'))