// if 

// if (condition) {        // if the condition is true , the code will execute otherwise if false then code will not execute
    
// }

// const isUserloggedIn = true




// const temp = 33

// if (temp === 50) {
//     console.log("Yes, it is.");                 // Yes, it is.
// } else {
//     console.log("No, It is not.");                  // No, It is not.
// }



const score = 200

if (score > 100) {
    let power = " fly"
    // console.log(`user power: ${power}`);            // user power:  fly
}



// ************************ if else  **********************************



// const bal = 1000

// if (bal > 500) console.log("test") , console.log("test2"); // not prefer to write the code like this in the companies 

// if (bal < 500) {
//     console.log("less than 500");
// } else if (bal < 750) {
//     console.log("less than 750");
// } else if (bal < 900) {
//     console.log("less than 900");
// } else {
//     console.log("Balance is greater than all these condition");
// }


const userLoggedIn = true
const debitCard = true
const loggedINfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard) {                         // && means "and" (All conditions should be true)
    console.log("Allow to buy things.");
}

if (loggedINfromGoogle || loggedInfromEmail) {           // || means "or" (If even only one condition is true)
    console.log("User logged In");
}




// <, >, , <=, >=, ==, !=, ===, !==