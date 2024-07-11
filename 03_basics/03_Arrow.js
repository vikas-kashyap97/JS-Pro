const user = {
    username: "Vikas",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , Welcome to the Website`);       // Vikas , "Welcome to the Website . (this- it referes the current context)
        // console.log(this);   
    }
}
user.welcomeMessage()

user.username = "Sam"
// user.welcomeMessage()                                                // Vikas , "Welcome to the Website 

// console.log(this);                                                      // {}



// function chai() {
//     console.log(this);
// }
// chai()



// const chai = function() {
//     let username = "Viaks"
//     console.log(this.username);                                            // undefined
// }
// chai()



const chai = () => {
    let username = "Vikas"
    // console.log(this.username);                                            // undefined ( if only this - {})                                        
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5, 5));                                                 // 10
      
                     // OR      

// const addTwo = (num1, num2) =>  num1 + num2

// console.log(addTwo(5, 5));                                                 // 10   (Implicit return)

                     // OR



// const addTwo = (num1, num2) =>  ( num1 + num2 )

// console.log(addTwo(5, 5));                                                    // 10   (Implicit return)



const addTwo = (num1, num2) =>  ({username: "Vikas"} )

console.log(addTwo(5, 5));                                                    // { username: 'Vikas' }


