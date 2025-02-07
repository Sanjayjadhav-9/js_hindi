// const tinderUser = new Object() // singleton object

const tinderUser = {} // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "X",
            lastName: "G"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "user1@email.com"
    },
    {
        id: 2,
        email: "user2@email.com"
    },
    {
        id: 3,
        email: "user3@email.com"
    },
    {
        id: 4,
        email: "user3@email.com"
    }
]

// console.log(users[0].email)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty('isLoggedIn'));

// Destructuring

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);


// {
//     "name": "hitesh",
//     "courseName": "js in hindi,"
//     "price": "999"
// }