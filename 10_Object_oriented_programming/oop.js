// object literal

const user = {
    username: "Vikas",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


//  Constructor function (new)

// const promiseOne = new Promise()
// const Date = new Date()

function User (Username, loginCount, isLoggedIn){
    this.Username = Username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }


    return this  //(If i write userOne with "new", so there is no need to return this)
}
const userOne = new User("Vikas", 79, true)       

console.log(userOne);                         // User { Username: 'Vikas', loginCount: 79, isLoggedIn: true, greeting: [Function (anonymous)] }
console.log(userOne.constructor);             // [Function: User]

// you can use instanceof property for further details (check here - "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof")



// what is new ? 

// 1. It's create a new Object
// 2. It's a constructor function
// 3. It's injectes all the values with "this"


