const name = "Vikas"
const repoCount = 16
console.log(name + repoCount);                                               // Vikas16

// you can add more data into console.log
console.log(name + repoCount + "kashyap");                                   // Vikas16kashyap  ---> but this is the old style

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)   // Hello my name is Vikas and my repo count is 16.


const newGame = new String('IGI game')                                       // second method

console.log(newGame[1]);                                                     // I               -->key value
console.log(newGame.length);                                                 // 3
console.log(newGame.toUpperCase());                                          // IGI GAME
console.log(newGame.charAt(4));                                              // g
console.log(newGame.indexOf('g'));                                           // 4
console.log(newGame.__proto__);                                              // {}

const newStr1 = newGame.substring(0, 4)
console.log(newStr1);                                                        // IGI

const newStr2 = newGame.slice(2,5)
console.log(newStr2);                                                        // I g             --> you can give the negative values as well

const newStr3 = "      Vikas Kashyap      "
console.log(newStr3);                                                        // [     Vikas kashyap      ]
console.log(newStr3.trim());                                                 // Vikas kashyap --> It removes the empty spaces 

const url = "https://vikas.com/vikas%20kashyap"
console.log(url.replace('%20', '-'));                                        // https://vikas.com/vikas-kashyap     

const name1 = "Vikas-kashyap-Akash kashyap-"
console.log(name1.split('-'));                                               // 'Vikas' 'kashyap' 'Akash' 'kashyap' 






