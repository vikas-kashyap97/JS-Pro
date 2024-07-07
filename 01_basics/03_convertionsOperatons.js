let score = 33
// console.log(typeof score); // number
// console.log(typeof (score)); // number
 
let rupees = "50"
// console.log(typeof rupees); // string
let valueInNumber = Number(rupees)
// console.log(typeof valueInNumber); // number

let any = "50abc"
let valueInNumber2 = Number(any)
// console.log(valueInNumber2); // NaN

let any2 = null
let valueInNumber3 = Number(any2)
// console.log(valueInNumber3); // 0

let any3 = undefined
let valueInNumber4 = Number(any3)
// console.log(valueInNumber4); // NaN

let boolean = true                         // if false
let valueInNumber5 = Number(boolean)
// console.log(valueInNumber5); // 1          // 0 (if false)

let naam = "Vikas"
let valueInNumber6 = Number(naam)
// console.log(valueInNumber6); // NaN

let isLooggedIn = ""
let booIsLoggedIn = Boolean(isLooggedIn)
// console.log(booIsLoggedIn); // false

//1 => true ; 0 => false
// "" => false
// "vikas" = > true 

let someNumber = 33
let stringsomeNumber = String(someNumber)
// console.log(stringsomeNumber); // 33
// console.log(typeof stringsomeNumber); // strings 


// *************************** Operations*********************

let value = 3
let negValue = -value
// console.log(negValue);    // -3 

let str1 = 3
let str2 = 2
let str3 = str1+str2
// console.log(str3);      // 5

// console.log("1" + 2);         //12
// console.log("1" + 2 + 2);     // 122
// console.log(1 + 2 + "2");     //32

// console.log(+true)  // 1
// console.log(+"");   // 0

let gameCounter = 100
gameCounter++ // 101 
++gameCounter //101
// console.log(gameCounter); // 101