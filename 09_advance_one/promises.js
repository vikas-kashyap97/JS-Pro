// Type 1

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DB calls, cryptography, newtwork
    setTimeout(function(){
        console.log('Async task is complete'); // Log when async task is complete
        resolve() // Resolve the promise
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed"); // Log when promise is consumed
})


// Type 2

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2"); // Log when async task 2 is complete
        resolve() // Resolve the promise
    },1000)
}).then(function(){
    console.log("Async 2 resolved"); // Log when promise is consumed
})
 

// three

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({Username: "Vikas kashyap", Email: "Vikaskashyaprock@gmail.com"}) // Resolve with user object
    },1000)
})

promiseThree.then(function(user){
    console.log(user); // Log the resolved user object
})

// four

const promiseFour = new Promise(function(resolve, reject){
          setTimeout(function(){
            let error = false; // No error
            if (!error){
                resolve({Username: " Vikas", Password: "12345"}) // Resolve with user object
            } else {
                reject('ERROR: Something went wrong') // Reject with error message
            }
          },1000)
})

promiseFour
.then((user) => {
    console.log(user); // Log the resolved user object
    return user.Username // Return the username
})
.then((Username) => {
    console.log(Username); // Log the username
})
.catch(function(error){
    console.log(error); // Log the error if rejected
}).finally(() => {
    console.log("The Promise is either resolved or rejected"); // Log when promise is settled
})


// five

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; // Simulate an error
        if (!error){
            resolve({Username: "Javascript", Password: "123"}) // Resolve with user object
        } else {
            reject('ERROR: JS went wrong') // Reject with error message
        }
      },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive // Await the promise
        console.log(response); // Log the response if resolved
    } catch (error) {
        console.log(error); // Log the error if rejected
    }
}
consumePromiseFive() // Call the async function


// Api Data Example

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // Fetch the data
        const data = await response.json() // Parse the JSON data
        console.log(data); // Log the data
    } catch (error) {
        console.log(("E: ", error)); // Log the error if fetch fails
    }
}
getAllUsers() // Call the async function


                //or

                
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json() // Parse the JSON data
})
.then((data)=>{
    console.log(data); // Log the data
})
.catch((error)=>{
  console.log(error); // Log the error if fetch fails
})
