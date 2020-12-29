//1.Use strict
// added in ES 5
// use this for Javascript
"use strict";
console.log(age);

//2.Variable
//let (added in ES6)

let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

{
  age = 4;
  var age;
}

console.log(age);

// 3.constants
// favor immutable data type always for a few reasons:
// - security
// - threead safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value:${count}, type:${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 12345678902345679234235547756735245n;
console.log(`value:${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'bendan';
const greeting = 'hello' + brendan;

