//++++++++++++++++++++++++++++++  Numbers   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const score = 400
console.log(score);                                     // 400

const bal = new Number(500)
console.log(bal);                                       // [Number: 500]

console.log(bal.toString().length);                     // 3

console.log(bal.toFixed(2));                            // 500.00  --> [uses to eCommerce websites]

const otherNum = 123.5986
console.log(otherNum.toPrecision(3));                   // 124
console.log(otherNum.toPrecision(4));                   // 123.6

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));          //10,00,00,000


// +++++++++++++++++++++++++++++++++   Maths   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);                           // Object [Math] {}
console.log(Math.abs(-4));                   // 4
console.log(Math.round(4.6));                // 5
console.log(Math.ceil(4.2));                 // 5
console.log(Math.floor(4.9));                // 4
console.log(Math.min(4,2,65,36,14,89,6,57)); // 2
console.log(Math.max(4,89,88,56,45,26,23));  // 89
console.log(Math.random());                  // 0.2564558475
console.log(Math.random()*10);               //1.25455468854

// if the value 0.04585485 like this
console.log(Math.random()*10 + 1);           //6.25251425525    or
console.log((Math.random()*10) + 1);         //6.25251425525

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max- min + 1)) + min);  // 12 or 15 or 13 or 14 or... everytime you get the value between 10 to 20 