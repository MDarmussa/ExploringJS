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

const alphapatic = {A: 4, E: 3, G: 6, I: 1, O: 0, S: 5, T: 7};

function leetSpeak(enteraStr) {
     let aText = '';
     for (let [key] of Object.entries(alphapatic)) {
          if(enteraStr === Object.keys(alphapatic[key])) {
               aText = aText +  Object.values(alphapatic[key]);
          }

     }
     return aText;

}
console.log(leetSpeak('A'));























// function leetspeak(str) {
//      const text = {A: 4, E: 3, G: 6, L: 1, O: 0, S: 5, T: 7};
//      return str.split('').map(i => text[i] || i ) . join('');

// }
// console.log(leetspeak('LEET'));



const alphapatic = {A: 4, E: 3, G: 6, I: 1, O: 0, S: 5, T: 7};

function leetSpeak(atext) {
     // const alphapatic = {A: 4, E: 3, G: 6, L: 1, O: 0, S: 5, T: 7};
     let converter = atext;
     for (i = 0; i<atext.length; i++) {
          for(const [key, value] of Object.entries(atext)) {
               // converter = Object.entries(atext);
               // console.log(`${value}`)
               if(atext === Object.values(atext)) {
                    converter += converter.entries(atext);
               } else {
                    converter = '';
          }
     }

     }
     return converter;
}
console.log(leetSpeak('L'));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

//Kristen Solution
// function leetSpeak(aText) {
//      let consverter = aText;
//      for(i=0; i<aText.length; i++) {
//           consverter = consverter.replace('A', consverter.A)
//           consverter = consverter.replace('E', consverter.E)
//           consverter = consverter.replace('L', consverter.L)
//           consverter = consverter.replace('G', consverter.G)
//           consverter = consverter.replace('I', consverter.I)   
//      }
//      return consverter;
// }
// console.log(leetSpeak('ALI'));