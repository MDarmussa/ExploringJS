// JS 101 Exercises  - Small - Canvas

function makeANumber() {
     const myNum = 5;
     return myNum;
}

function makeAnInteger() {
     const myInt = 12;
     return myInt;
}

function makeAFloat() {
     const myFloat = 1.023;
     return myFloat;
}

function makeZero() {
     const zilch = 0;
     return zilch;
}

function makeNothing() {
     const huh = "";
     return huh;
}

function makeBoolean() {
     const myBool = true;
     return myBool;
}

function makeNull() {
     const nothingMuch = null;
     return null;
}

function helloWorld() {
     return "Hello, world!";
}

function helloName(name) {
     return "Hello, " + name + "!";
}

function abstractLength() {
     const tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
       'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
       'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
       'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'

       return tarPitAbstract.length;
}


function makeLoud() {
     const chorus = 'Who let the dogs out?';
     return chorus.toUpperCase();     
}


function makeQuiet(str) {
     return str.toLowerCase();
}


function add99(n) {
     return 99 + n;
}

function add(n, m) {
     return n + m;
}

function subtract(n, m) {
     return n - m;
}

function multiply(n, m) {
     return n * m;
}

function divide(n, m) {
     return n / m;
}

function mod(n, m) {
     return n % m;
}

function threeFruits() {
     const fruits = ['Apple', 'Banana', 'Cherry'];
     return fruits;
}

function multipleTypes() {
     const diverseArray = ['Skateboard', null, 8.75, 'Eiffel Tower', 44, 7, true, null];
     return diverseArray;
}

function indexAccess() {
     const people = ['Jenny', 'James', 'Jimmy', 'Jonny', 'Julia', 'Jessica'];
     return people [2];
}

function useLength() {
     const arr ['a', 'b', 'c'];
     return arr.length;
}

function usePush() {
     const arr = ['a', 'b', 'c'];
     arr.push('d');

     return arr;
}

function useIndexOf() {
     const arr = ['C', 'A', 'G', 'T', 'A', 'A', 'G', 'T']
     return arr.indexOf('T')
}

function useJoin() {
     const arr = ['a', 'b', 'c', 'd', 'e', 'f']
     return arr.join('-')
}

//--------------------------------------------------------------------------------------

// Bellew are the question - coppied pasted from Canvas


// Small
// Numbers
// Let's write some functions that 1) create a variable and 2) return it

// 1. myNum
// Define a function called makeANumber().

// Solution
// Declare a variable myNum and assign any number to it, then return myNum.

// NOTE: myNum can be any valid JavaScript number

// Solution
// 2. myInt
// Define a function called makeAnInteger().

// Solution
// Declare a variable myInt and assign an integer to it, then return myInt.

// Solution
// 3. myFloat
// Define a function called makeAFloat.

// Solution
// Declare a variable myFloat and assign a floating point number to it, then return myFloat.

// Solution
// 4. zilch
// Define a function called makeZero().

// Solution
// Declare a variable zilch and assign the number 0 to it, then return zilch.

// Solution
// function makeZero () { var zilch = 0; return zilch; }
// undefined, booleans, and null
// Let's continue with variable declaration and making more simple types.

// 5. makeNothing()
// Define a function called makeNothing(). Declare a variable huh and assign nothing to it, then return huh.

// Solution
// NOTE: the value undefined means "lack of assignment", which is what this function should return.

// 6. makeBoolen()
// Define a function called makeBoolean(). Declare a variable myBool and assign it either true or false, then return myBool.

// Solution
// NOTE: remember that the string "true" (surrounded by quotes) is not the same thing as boolean true (no quotes).

// 7. makeTrue()
// Define a function called makeTrue(). Declare a variable yep and assign boolean true, then return yep.

// Solution
// 8. makeFalse()
// Define a function called makeFalse(). Declare a variable nope and assign boolean false, then return nope.

// Solution
// 9. makeNull()
// Define a function called makeNull(). Declare a variable nothingMuch and assign null to it, then return nothingMuch.

// Solution
// Strings
// Let's venture into JavaScript strings in these exercises. Hold onto your hats: we will be using functions with parameters here too!

// 10. helloWorld()
// Define a function called helloWorld(). Return the string "Hello, world!".

// Solution
// 11. helloName()
// Define a function called helloName() that accepts 1 parameter (arity of 1). Use the symbol "name" for the parameter name.

// Solution
// Return the string "Hello, <name>!" where <name> is the value passed to the function.

// Solution
// 12. abstractLength()
// Return the length of the string "tarPitAbstract" defined below. You may copy and paste the code into your text editor.

// HINT: Use the .length property (Links to an external site.)

// function abstractLength() {
//   const tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
//     'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
//     'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
//     'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'

// }
// Solution
// 13. makeLoud()
// Modify the following function, returning the string chorus in all capital letters.

// HINT: use the .toUpperCase method (Links to an external site.) //

// function makeLoud() { var chorus = 'Who let the dogs out?'; } 
// Solution
// 14. makeQuiet()
// In the following makeQuiet() function, assume that a string is passed as the parameter str.

// Return the value of str in all lower case letters.

// HINT: use the .toLowerCase method (Links to an external site.)

// function makeQuiet(str) {

// }
// Solution
// Math
// Let's do some grade-school math. Actually: let's have the computer do the math for us 😃

// This page may be helpful for these exercises: Arithmetic Operators (Links to an external site.)

// 15. add99()
// Create a function called add99() that takes one argument and adds the number 99 to it.

// You can assume that the argument passed in will be a number value.

// Solution
// 16. add()
// Create a function add() that takes 2 arguments and sums them together.

// Assume that both arguments are numbers.

// Solution
// 17. subtract()
// Create a function subtract() that takes 2 number arguments and returns their difference (i.e., the second number substracted from the first number).

// Solution
// 18. multiply()
// Create a function multiply() that takes 2 number arguments and returns their product.

// Solution
// 19. divide()
// Create a function divide() that takes 2 number arguments. Divide the first argument by the second and return the result.

// Solution
// 20. mod()
// The modulus operator (%) finds the remainder from division.

// Create a function mod() that takes 2 number arguments and returns the remainder of the first divided by the second.

// Solution
// Arrays
// Arrays (Links to an external site.) are ordered lists of values. You use them all the time in programming.

// 21. threeFruits()
// You can create an Array using the [] characters, with commas separating the individual values.

// Define a function called threeFruits(). Declare a fruits variable whose value is the Array ['Apple', 'Banana', 'Cherry']

// Return the array of fruit strings.

// Solution
// 22. multipleTypes()
// An Array can contain multiple types. ie: strings, numbers, boolean, etc.

// Define a function called multipleTypes(). Declare a diverseArray variable whose value is the Array ['Skateboard', null, 8.75, 'Eiffel Tower', 44, 7, true, null].

// Return the array of values.

// Solution
// 23. indexAccess()
// You can access individual values of an array using bracket notation shown below. Remember that arrays start at index 0. So for an array myArray the first item can be accessed at myArray[0].

// Define a function called indexAccess(). In the function, create a people array with the names of 6 people. (These names should be strings!)

// Solution
// Return the third item from the people array.

// Solution
// 24. useLength()
// Define a function called useLength(). In the function, create an arr array that contains the strings 'a', 'b', and 'c'. Return the length of the array (Links to an external site.).

// Solution
// 25. usePush()
// Define a function called usePush() with an arr variable. arr should be an array that contains the strings 'a', 'b', and 'c'.

// Add the string 'd' to the end of an array using the .push() method (Links to an external site.).

// Then return the array.

// Solution
// 26. useIndefOf()
// You can search an array for an item using the .indexOf() method (Links to an external site.). This method accepts a value as an argument.

// It returns either:

// the first index of an item that matches the argument
// or -1 if there are no matching items
// Create a function called useIndexOf() with an array arr. The array should hold the values 'C', 'A', 'G', 'T', 'A', 'A', 'G', 'T'.

// Return the index of 'T'.

// Solution
// 27. useJoin()
// You can convert an Array into a string using the .join() method (Links to an external site.).

// Define a useJoin() function with an array containing the strings 'a', 'b', 'c', 'd', 'e', 'f'.

// Return the string 'a-b-c-d-e-f'.