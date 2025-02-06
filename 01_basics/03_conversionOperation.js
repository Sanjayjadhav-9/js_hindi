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