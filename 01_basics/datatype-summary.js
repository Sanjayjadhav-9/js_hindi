// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3546846549841846556n // bigInt

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "arjun", "krishna"];
let myObj = {
    name: "sanjay",
    age: 25
}

const myFunc = function(){
    console.log("Hello World!");
}



// ***********************************************************

// stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "sanjayjadhavdotcom"

let anotherName = myYoutubeName
anotherName = "krishna"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "sanjay@email.com",
    upi: "sanjay@ybl"
}

let userTwo = userOne
userTwo.email = "sanjay@google.co"

console.log(userOne.email);
console.log(userTwo.email);
