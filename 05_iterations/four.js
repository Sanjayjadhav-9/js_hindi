const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

const myArray = ['a', 'b', 'c', 'd', 'e']

// forin loop identifies keys and values
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}

// forOf loop identifies only values

// for (const key of myObject) {
//     console.log(`${key} : ${myObject[key]}`);
// }

for (const key in myArray) {
    console.log(`${key} : ${myArray[key]}`);
}
for (const value of myArray) {
    console.log(`${value}`);
}