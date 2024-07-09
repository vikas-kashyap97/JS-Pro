// singleton
// objects.create

// objects literals 


const mySym = Symbol("key1")

const JsUsers = {
    name: "Vikas",
    "full name": "Vikas kashyap",
    [mySym]: "myKey1",                                      // very important for any symbol into objects.
    age: 22,
    location: "Hardoi",
    email: "vikaskashyaprock@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Sunday", "Saturday"]
}

console.log(JsUsers.email);                                 // vikaskashyaprock@gmail.com
                       // or
console.log(JsUsers["email"]);                              // vikaskashyaprock@gmail.com

console.log(JsUsers["full name"])                           // Vikas kashyap

console.log(JsUsers[mySym]);                                // mykey1

JsUsers.email = "Vikas@apple.com"                           // for chnaging any value of the object
//Object.freeze(JsUsers)                                      // it freezes the whole object and prevent for any changes
JsUsers.email = "vikas@google.com"                          
console.log(JsUsers);                                       // vikas@apple.com   (due to freeze property)


JsUsers.greeting = function() {
    console.log("Hello JS user");
}

JsUsers.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUsers.greeting());                            // Hello JS user
console.log(JsUsers.greetingTwo());                         // Hello JS user, Vikas
