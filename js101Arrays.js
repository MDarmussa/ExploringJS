// JS exploring Arrays  -  Canvas


// const digitalCraftsCrew = [
//      "Jamie",
//      "Dr. Vicki",
//      "Jada",
//      "Athena",
//      "Dee",
//      "Ernesto",
//      "Robbie"
//      ];
     //Length of the array
     //Add a new item to the END of the array
     //Remove item from the END of the array
     //Get the index of "Dr. Vicki"

// Solution:

const digitalCraftsCrew = [
     "Jamie", "Dr. Vicki", "Jada", "Athena", "Ernesto", "Robbie"
];

const howmany = digitalCraftsCrew.length;   //count the array length
console.log(howmany);

digitalCraftsCrew.push("Lee");
console.log(digitalCraftsCrew)

digitalCraftsCrew.pop();
console.log(digitalCraftsCrew)

const indx = digitalCraftsCrew.indexOf('Dr. Vicki')
console.log(indx)