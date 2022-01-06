
// Long-long Vowels
// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

// longLongVowels('Good')
// 'Goooood'
// longLongVowels('Cheese')
// 'Cheeeeese'
// longLongVowels('Man')
// 'Maaaaaaan'


//   Solution:
//need array contians all vowels in Alphabatic
//define a function with one parameter called repeatVolNum to be declared later
//assign an empty variable
//for loop to go over the array elements
//if parameter[i] == 




function longVowel(str) {
     strings = '';
     for(i=0; i<str.length; i++){
          while (String.includes('a', 'e', 'i', 'u')) {
               strings = str.join('aaaaa');
     }


     }
return strings;
}
console.log(longVowel('a'));

// const vowels = 'A', 'E', 'I', 'O', 'U', 'Y', 'W';

// function isVowel(repeatVolNum) {
//      newStr = '';
//      for(i=0; i<repeatVolNum.length; i++) {
//           newStr += repeatVolNum.
//           if(vowels == repeatVolNum[i]) {
//                newStr += repeatVolNum[i];
               
//           }
//           console.log(newStr);

//      }
//      return newStr;
// }
// isVowel('E');






// const isVowel = vowels.map(x => vowels[x] == true)
// console.log(isVowel('Good' * 5));









