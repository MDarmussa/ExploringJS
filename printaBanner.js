// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text.
//  The border has to stretch to the length of the text.

// Output
// > printBanner('Welcome to DigitalCrafts')
// ----------------------------
// - Welcome to DigitalCrafts -
// ----------------------------

// Solution
// define function printBanner
// define banner as a String
//banner string need to be concat start and finish with '-'
//find length of bannerString
//in function printBanner -- return bannerTopBot with new line, then return bannerTopBot with no new line


function dashes(strDashes) {
     let dashesLine = '';
     for(i=0; i<strDashes.length+4; i++) { // length+2 is because we have two dashes for the second line
          dashesLine += '-'
     }
     return dashesLine;
}
// console.log(dashes('hello')) //for test only/ for testing dashes/ dashes must equal to the string length

function bannerText(inputaString) {
     let atext = ''
     atext = '- ' + inputaString + ' -';
     return atext;
}
// console.log(bannerText('hello')); // for test only

function printBanner(aString) {
     aString = dashes(aString) + '\n' + bannerText(aString) + '\n' + dashes(aString);
     return aString;
}
console.log(printBanner('Welcome to DigitalCrafts'));
