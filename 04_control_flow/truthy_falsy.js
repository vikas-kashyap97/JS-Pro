//*************** truthy and falsy values ************

const userEmail = "Vikaskashyaprock@gmail.com"

if (userEmail) {
    console.log("Got user Email");            // Got user Email
} else {
    console.log("Don't have user Email");
}

                        // Falsy Values - 

                                 // false, 0, -0, BigInt 0n, "", null, undefined, NaN, 

                        // Truthy values - 

                                // "0", 'false', " ", [], {}, function(){}



const emptyArray = [] 

if (emptyArray.length === 0) {
    console.log("Array is empty");            // Array is empty
} 



const emptyObject = {} 

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");            // Object is empty
} 


// Nullish Coalescing Operator (??): null undefined


let val1;

// val1 = 5 ?? 10                               // 5
// val1 = null ?? 10                            // 10 
// val1 = undefined ?? 50                       // 50
val1 = null ?? undefined ?? 10 ?? 500           // 10

console.log(val1); 



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");         // more than 80