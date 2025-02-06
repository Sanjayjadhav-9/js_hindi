let score = null 
// number = 33 // string => "33abc" // object => null

console.log(typeof score); // string
console.log(typeof (score)); // string

let valueInNumber = Number(score)

console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

let isLoggedIn = "sanjay"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// 1 => true; 0 => false
// "" => false
// "sanjay" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************** Operations ****************

let value = 3
let negValue = -value
console.log(negValue);

console.log(+true);
console.log(+"");

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion