let oldArr = [1, -3, 5, -3, 0, 7, 2];

function positiveNumbers (anArray) {
     let newArray = [];
     for (i=0; i<anArray.length; i++) {
          if(anArray[i] > 0) {
               newArray.push[anArray[i]];
          } 
     }
     return newArray;
}
console.log(positiveNumbers(oldArr));
