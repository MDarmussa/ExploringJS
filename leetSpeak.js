// Leetspeak

// Write a function leetspeak which is given a string, 
// and returns the leetspeak equivalent of the string. 
// To convert text to its leetspeak version, 
// make the following substitutions:

// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

// input/output:
// leetspeak('Leet')
// l337

// Solution:

//      function leetspeak (typeAtext) {
//      const text = {A: 4, E: 3, G: 6, I: 1, O: 0, S: 5, T: 7};
//      if (text.A === A) {
//           console.log(Object.values(text))
//      } else if(text.E === E) {
//           console.log(Object.values(text))
//      } else {
//           console.log('error')
//      }

// }
// console.log(leetspeak(T));

// function leetspeak ('typeAtext')


// for (let i=1; i<text.length; i++) {
          
          
// }


function leetspeak(str) {
     const text = {A: 4, E: 3, G: 6, L: 1, O: 0, S: 5, T: 7};
     return str.split('').map(i => text[i] || i) . join('');

}
console.log(leetspeak('leet'));