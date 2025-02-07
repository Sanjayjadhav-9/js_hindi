const marvel_heros = ["IronMan", "Hulk", "Captain America"]
const dc_heros = ["SuperMan", "BatMan"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
const heros = marvel_heros.concat(dc_heros)
// console.log("heros : ", heros);
const heros2 = [...marvel_heros, ...dc_heros] // spread operator
// console.log("heros2 : ", heros2);

console.log(Array.isArray("sanjay"));
console.log(Array.from("sanjay"));
console.log(Array.from({name: "sanjay"})); // interesting 

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]