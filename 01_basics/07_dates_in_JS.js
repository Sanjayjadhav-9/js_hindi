// Dates

const myDate = new Date()
// console.log(myDate); // 2025-02-07T07:15:24.716Z
// console.log(myDate.toString()); // Fri Feb 07 2025 07:17:04 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Fri Feb 07 2025
// console.log(myDate.toLocaleString()); // 2/7/2025, 7:18:54 AM

const myCreatedDate = new Date(1998, 9, 7)
console.log(myCreatedDate.toDateString()); // Wed Oct 07 1998

// const mySampleDate = new Date(2023, 0, 23)
// const mySampleDate = new Date(2023, 0, 23, 5, 3)
// const mySampleDate = new Date("2023-01-23")
const mySampleDate = new Date("01-23-2023")
// console.log(mySampleDate.toLocaleDateString()); // 1/23/2023

const myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mySampleDate.getTime());