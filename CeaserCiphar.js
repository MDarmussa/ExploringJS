// Caesar Cipher
// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

// cipher('Genius without education is like silver in the mine')
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

// solution

// white bord

//need an array conian all Alphabatic --1
//define a function with two parameters --2
// first parameter for entering a string, second parameter for how many space to push it back --2 a
//define a new str variable --3
// need for loop to go over the alpha using str parameter --4
// if statement (if str paramenter = alpha[i])
//

const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function CaesarCipher(str, AlphaArr) {
    let newArr = [];
    let newAlpha = '';
    for (i=0; i<str.length; i++) {
        newArr.push(AlphaArr.indexOf(str[i]));
        newAlpha += newArr [(i-2) % alpha.length]
        
    }
    return newAlpha;
}
console.log(CaesarCipher('hello', alpha))












// const newAlpha = '';
// function shitft(n) {
//     for(i=0; i<alpha.length; i++) {
//         let offset = (i+n) % alpha.length;
//         newAlpha += newAlpha[offset];
//     }
// }

// const alpha = "abcdefghijklmnopqrstuvwxyz";

// function CaesarCipher(message, n) {
//     let result = '';
//     for (i=0; i<message.length; i++) {
//         let offset = (i+n) % alpha.length;
//         newAlpha += newAlpha[offset];
//         let index = alpha(message[i]);
//         result += newAlpha[index];
//     }
//     return result;
// }
//  console.log(CaesarCipher('hello', 2));



















    //   // you can comment this line
    //   str = str.toLowerCase();
 
    //   let result = '';
    //   let charcode = 0;
  
    //   for (let i = 0; i < str.length; i++) {
    //       charcode = (str[i].charCodeAt()) + num;
    //       result += String.fromCharCode(charcode);
    //   }
    //   return result;