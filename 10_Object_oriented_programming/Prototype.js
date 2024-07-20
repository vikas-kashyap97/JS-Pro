// From here we are starting prototypes

// In javascript 

// function--
// Array  ----------------> Object ------------null
// String--

// (When we give access to the "Object" it will works in function, Array, Sring but when give the to(function, Array, Sring), it won't work like gobaly) 

//***************************************************************************************************************************************************** */


// let myName = "Vikas"
// console.log(myName.length);  // 5

// let MyNewName = "Vikas     "
// console.log(MyNewName.truelength);   // there is no functionality of truelength which gives you the length = 5 but we are going to make it as a method


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);  // Spidy power is Sling
    }
    
}
// heroPower.getSpiderPower()


// ****************************************************************************************
Object.prototype.vikas = function( ){
    console.log(`Vikas is present in all objects`);
}
// heroPower.vikas()     // can we call it ? Yes! by creating above fnctionality  // Vikas is present in all objects
// myHeros.vikas()       // You can call it any function // Vikas is present in all objects  (when we give access to the object it will works in function, Array, Sring)
// ****************************************************************************************

Array.prototype.heyVikas = function(){
    console.log(`Vikas says Hello!`);
}
myHeros.heyVikas()                        // Vikas is present in all objects
// heroPower.heyVikas()                   // TypeError: heroPower.heyVikas is not a function (when we give access to the strings it will not works)


// inheritence


const User = {
    name: " vikas",
    email: "Vikas@google.com"
}
const Teacher ={
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}

 const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport  // you can add another objects in it by __proto__
 }
 Teacher.__proto__ = User       // it also works outside of the object
 
// Note - this is the old syntax and do not use , nowadays

 // modern syntax
 Object.setPrototypeOf(teachingSupport, Teacher)  // it is a modern syntax and use nowadays



let anotherUsername = "Vikaskashyap     "
String.prototype.trueLength = function(){
    console.log(`${this}`);                                 // Vikaskashyap
    console.log(`True length is ${this.trim().length}`);    // True length is 12
}
anotherUsername.trueLength()

"Vikas".trueLength()                                        // True length is 5