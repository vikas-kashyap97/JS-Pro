//                 JAVASCRIPT EXECUTION CONTEXT

//   |-------------|
//   |             |
//   |             |
//   |     {}      |    ---------> Global EC ^
//   |             |                         | 
//   |-------------|                         |
//                                           |-----> this

//  1. Global execution context
//  2. Function execution context
//  3. Eval execution context


//   |-------------|
//   |             |
//   |             |
//   |     {}      |    ---------> Memory Creation Phase/Creation Phase
//   |             |               Exexution Phase           
//   |-------------|              




//         example

let val1 = 10
let val2 = 5
function addNum (num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)              // 15
let result2= addNum(10,2)                     // 12

// Please see the 05.jpeg image for detailed explanation.



// **************   call stack  *****************

