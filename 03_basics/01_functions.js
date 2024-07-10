function sayMyName () {
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("A");
    console.log("S");
}

// sayMyName()       // V I K A S               (sayMyName = reference , () = executer)


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(5,5)                             // 10



// addTwoNumbers(4, "5")                          // 45     (becuase js will be considered both of them as a string)
// addTwoNumbers(4, "a")                          // 3a     (becuase js will be considered both of them as a string) 


function addTwoNumbers(num1, num2){               // (addTwoNumbers = reference , (num1, num2) = execute , 
         let result = num1 + num2;                
         return result                            // return = run this funtion after the after the fuctionality of executers
     }

const result = addTwoNumbers(5,5)

// console.log("Result: ",result );                 // Result:  10





// function loginUserMessage(usernname){
//     return  `${usernname} just logged in`
// }
// console.log(loginUserMessage("Vikas"));             // Vikas just logged in




function loginUserMessage(username){
    if (!username) {
        console.log("Please enter a username");        // Please enter a username
        return
    }
        return  `${username} just logged in`          // username just logged in just logged in (if we give any username)
     }

     console.log(loginUserMessage());                  // undefined (if we do not give any username) 




     function addCartPrice (...num1){
        return num1
     }
     console.log(addCartPrice(500,600,4111,2000));     // [ 500, 600, 4111, 2000 ]




     const user = {
        username: "Vikas",
        price: 199
     }

     function handleObject(anyObject){
        console.log(`My username is ${anyObject.username} and price is ${anyObject.price}`);
     }

    // handleObject(user)                              // My username is Vikas and price is 199
    handleObject({                                     // you can add your own data
        username:"sam",
        price: 399
    })                                                 // My username is sam and price is 399

const myNewArray = [500,600,55,225,2225,7777]

function returnthridValue(getArray){
    return getArray[2]
}
// console.log(returnthridValue(myNewArray));             // 55
console.log(returnthridValue([8585,59,566,5,85,85]));     // 566  (you can add your own data)
