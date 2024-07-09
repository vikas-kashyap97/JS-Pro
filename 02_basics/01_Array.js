// ++++++++++++++++++++++++++++++  Array  ++++++++++++++++++++++++++++++++++++++++++

// const myArr = [0,1,2,3,4,5,6,7,8,9]
// const myHeros = ["HULK","IRON MAN","CAP. AMERICA"]

// console.log(myArr[5]);                // 5

// const myArr2 = new Array (1,2,3,4,5,6,7)                      // second way to write array
// Array Methods

const myArr2 = [0,1,2,3,4,5,6,7,8,9]
// myArr2.push(10)
// console.log(myArr2);                                          // 0,1,2,3,4,5,6,7,8,9,10 (it adds the value at the end)
// myArr2.pop()
// console.log(myArr2);                                          // 0,1,2,3,4,5,6,7,8,9 (it deletes the value of last array)

// myArr2.unshift(111)
// console.log(myArr2);                                          // 111,0,1,2,3,4,5,6,7,8,9 (it adds the value at the start)

// myArr2.shift(111)                                             // 0,1,2,3,4,5,6,7,8,9 (it deletes the value at the start)

// console.log(myArr2.includes(8));                              // true
// console.log(myArr2.indexOf(5));                               // 5


const newArr = myArr2.join()
// console.log(myArr2);                                             // [0,1,2,3,4,5,6,7,8,9]  
// console.log(newArr);                                             // 0,1,2,3,4,5,6,7,8,9  (strings) 


//++++++++   slice  ++++ splice   ++++++++++++++++++++++++++++

console.log("A", myArr2);                                           // A [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const myN1 = myArr2.slice(1,3)
console.log(myN1);                                                  // [ 1, 2 ]

console.log("B", myArr2);                                           // B [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const myN2 = myArr2.splice(1,3)                                  
console.log("C", myArr2);                                           // C [0, 4, 5, 6, 7, 8, 9]
console.log(myN2);                                                  // [1, 2, 3]


