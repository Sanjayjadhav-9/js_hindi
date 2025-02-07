// array

const myArr = [1,2,3,4,5]
const myHeros = ["shaktiman", "krishna", "balaram"]
// console.log(myArr);

const myArr2 = new Array(1,2,3,4,5,6,7,8,9)
// console.log(myArr2);

// Array Methods

// myArr.push(5)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(4)); // true
// console.log(myArr.indexOf(4)); // 3

const newArr = myArr.join() // string
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice
console.log("myArr elements: ", myArr);

const myNewArr = myArr.slice(1, 3)

console.log("Removed elements: ", myNewArr);
console.log("myArr elements: ", myArr);

const myNewArr2 = myArr.splice(1, 3)
console.log("myArr elements: ", myArr);
console.log("Removed elements: ", myNewArr2);