// const tinderUser = new Object()     or

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Vikas"
tinderUser.isLoggedIn = false
tinderUser.age = 22
// console.log(tinderUser);        // { id: '123abc', name: 'Vikas', isLoggedIn: false, age: 22 }

const regularUser = {
    email: "some@google.com",
    fullName: {
        userFullName : {
            fisrtName : "Vikas",
            lastName : "Kashyap"
        }
    }
}
console.log(regularUser.fullName.userFullName.fisrtName);         // Vikas

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}                                       // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign( {}, obj1, obj2 )                    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3);                                                 // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users =[
    {
    id: 1,
    email: "vikas@google.com"
    },
    {
        id: 1,
        email: "vikas@google.com"
        },
        {
            id: 1,
            email: "vikas@google.com"
            }
]
 users[1].email

 console.log(tinderUser);        // { id: '123abc', name: 'Vikas', isLoggedIn: false, age: 22 }
 
 
 console.log(Object.keys(tinderUser));                   // { id: '123abc', name: 'Vikas', isLoggedIn: false, age: 22 } [ 'id', 'name', 'isLoggedIn', 'age' ]
 console.log(Object.values(tinderUser));                 // [ '123abc', 'Vikas', false, 22 ]
 console.log(Object.entries(tinderUser));                // [ [ 'id', '123abc' ],[ 'name', 'Vikas' ],[ 'isLoggedIn', false ],[ 'age', 22 ] ]
 console.log(tinderUser.hasOwnProperty('name'));         // true 