// Print a box
// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

// printBox(6, 4)
//  ---
// |   |
//  ---


// solution:

function printBox(row, col) {
     for (let i=1; i<=row; i++){
          for(let j=1; j<= col; j++){
               if(i===1 || i===row || j===1 || j===col){
                    console.log('-')
               } else {
                    console.log('');
               }
          }
          console.log('')
     }
}
printBox(6, 4)