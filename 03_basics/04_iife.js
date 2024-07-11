// Immediately Invoked Function Expressions (IIFE)
// It uses for, to prevent the pollution of global scope' declerations or variables.

// function chai (){
//     console.log(`DB CONNECTED`);                     // DB CONNECTED
// }
// chai()




//+++++++++++++++++++++++++  IIFE   +++++++++++++++++++


(function chai (){                                   // named IIFE
    console.log(`DB CONNECTED`);                     // DB CONNECTED
})();

// Note- First() - it's where we write the definition and second() - execution





// IIFE in arrow function

(  () => {
    console.log(`DB CONNECTED TWO`);                 // DB CONNECTED TWO 
}) ();



(  (user) => {                                      // Unnames IIFE with parammeters
    console.log(`DB CONNECTED WITH ${user}`);       // DB CONNECTED WITH Vikas
})("Vikas")

