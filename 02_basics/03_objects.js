// singleton
// Object.create // constructor

// object literals
const mySym = Symbol("key1")
// console.log(mySym); // Symbol(key1)


const JsUser = {
    name: "Sanjay",
    age: 18,
    [mySym]: "mykey1", // symbol as a key
    location: "Hyderabad",
    email: "sanjay@email.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name); // not a good practice to log a object key.
// console.log(JsUser["name"]); // good practice
// log a Symbol value using object
// console.log(`${typeof JsUser[mySym]} : ${JsUser[mySym]}`);

JsUser.email = "sanjay@google.com"
// Object.freeze(JsUser)
JsUser.email = "sanjay@microsoft.com"

// console.log(JsUser);

JsUser.greet = function(){
    console.log("Hello Sanjay");
}
JsUser.greeting = function(){
    return ("Hello Sanjay");
}

console.log(JsUser.greeting); // [Function (anonymus)]
console.log(JsUser.greet()); // Hello Sanjay <-| undefined
console.log(JsUser.greeting()); // Hello Sanjay