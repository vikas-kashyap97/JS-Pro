const marvel_heros = ["thor", "ironman", "cap. america", "spiderman"]
const letters = ["A", "B", "C", "D", "E"]

// marvel_heros.push(letters)

// console.log(marvel_heros);                     // ['thor','ironman','cap. america','spiderman',[ 'A', 'B', 'C', 'D', 'E' ]]
// console.log(marvel_heros[4][1]);               // B

// const All = marvel_heros.concat(letters)

// console.log(All);                                 // ['thor','ironman','cap. america','spiderman','A','B','C','D','E']

// const allNew = [...marvel_heros, ...letters]

// console.log(allNew);                                 // ['thor','ironman','cap. america','spiderman','A','B','C','D','E']

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const whole_array = another_array.flat(Infinity)

console.log(whole_array);                               // [1, 2, 3, 4, 5, 6, 7, 4, 6, 7, 4, 5]

console.log(Array.isArray("Vikas"));                    //false
console.log(Array.from("Vikas"));                       // [ 'V', 'i', 'k', 'a', 's' ]
console.log(Array.from({name: "Vikas"}));               // []                         (interesting)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));            // [ 100, 200, 300 ]