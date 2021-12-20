// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text.
//  The border has to stretch to the length of the text.

// Output
// > printBanner('Welcome to DigitalCrafts')
// ----------------------------
// - Welcome to DigitalCrafts -
// ----------------------------

// Solution


function printBanner (dashes, writeAbanner) {

     for (let i=0; i<writeAbanner;) {

          if (i < writeAbanner.length) {
               console.log('-');
               console.log(writeAbanner)
               console.log('-')
               i++;
          }
     }
     return i;
}
console.log (printBanner('hello people'));