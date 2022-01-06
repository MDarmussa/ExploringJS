
// Just the positives
// Write a function positiveNumbers which is given an array of numbers and 
// returns a new array containing only the positive numbers within the given array.

// positiveNumbers([1, -3, 5, -3, 0])
// [1, 5, 0]
// positiveNumbers([1, 2, 3])
// [1, 2, 3]
// positiveNumbers([-1, -2, -3])
// []

// solution:
// 1) White bord
//need old array with its values --1
//define a function called positiveNumbers --2
//assign one parameter for the function --3
//define a new empty array to save the new positive values --4 
//define a for loop to go over the old array(parameter) --5
// nested (if the parameter [i] > 0, --6
//newArr.push (parameter [i])  --7
//return  --8
//console.log  --9

let oldArr = [1, -3, 5, -3, 0, 7, 2];
function positiveNumbers (anArr) {
     let newArr = [];
     for (i=0; i<anArr.length; i++) {
          if (anArr[i] > 0) {
               newArr.push(anArr[i]);
          }
     }
     return newArr;
     
}
console.log(positiveNumbers(oldArr));






// const greaterThan100mass = characters.filter(characters => {
//      return characters.mass > 100;
//  });
 // console.log(greaterThan100mass);


//  const positivePuller = oldArr.filter(oldArr => {
//       return oldArr > 0;
//  })
//  console.log(positivePuller);