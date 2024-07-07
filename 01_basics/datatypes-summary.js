// # Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = "100"                    // typeof - strings
const scoreVal = 100.3                 // typeof - Number
const isLoggedIn = true                // typeof - Boolean
const outsideTemp = null               // typeof - null
let userEmail;                         // typeof - undefined

// const id = Symbol('456')              ]
// const id2 = Symbol('456')             |------> Symbol    // typeof - symbol
// console.log(id === id2); // false     ]

//const bigNumber = 65568656887878786767867879465786787n
//console.log(typeof bigNumber)                             // bigint


// # Reference (Non primitive)

// Array , Objects , functions

//Array-->  const heros =["Tony Start", "Captain America", "Wanda", "Hulk"]

//Objects-->  const heros= { 
//                  name:"Vikas",
//                  age: 22,
//                     }

//functions --> 
//const myFunction = function()   {
//         console.log("Hello World!");
//     }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myName = "Vikas"
let anotherName = myName

anotherName="Golu"
console.log(myName);    // Vikas
console.log(anotherName); // Golu


let userOne ={
    email: "vikas@google.com",
    comapny: "Google"
}
let userTwo = userOne

userTwo.email = "vikas@X.com"

console.log(userOne.email); // vikas@X.com
console.log(userTwo.email); // vikas@X.com
