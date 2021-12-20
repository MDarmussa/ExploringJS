// (Anonymous Functions & Callbacks)   ------   Canvas Material Practicing

//Function Declarations    ---------- 1
// function add(x, y) {
//      return x + y;
// }
// // // const result = add(2, 3);
// // console.log(add(2, 3))

// const result1 = add(2, 3);
// const result2 = add(4, 5);
// console.log(result1)
// console.log(result2)



// //Anonymous Functions    -----------2 
// const add = function (x, y) {
//      return x + y;
// };
// const result = add(2, 3);
// console.log(result);



//Arrow functions    -----------3


// const add = (x, y) => {
//      return x + y;
// }
// const sub = (x, y) => {
//      return x - y;
// }
// const mul = (x, y) => {
//      return x * y;
// }
// const div = (x, y) => {
//      return x / y;
// }

// const apply = (a, b, fn) => {
//      const val = fn(a, b);
//      return val;
// }   // the parameter names a, b, and fn do not have to match any other variable names (such as x and y)


// const r1 = apply(2, 3, add);
// const r2 = apply(5, 3, sub);
// const r3 = apply(5, 6, mul);
// const r4 = apply(5, 2, div);
 
// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);



//Processing Arrays with Callbacks-----------4
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduce = (arr, fn) => {
     let result = arr[0];

     for (let i=1; i<arr.length; i++) {
          result = fn(result, arr[i]);
     }
     return result;
}


const r5 = reduce(arr, add);
console.log(r5);








// let result = nums[0];
// for (let i=1; i<nums.length; i++) {
//      result = result + nums[i]
// }   

// const reduce = (arr, fn) => {
//      let result = arr[0];
// }



// const r1 = resuce(nums, add)


// console.log(r1);