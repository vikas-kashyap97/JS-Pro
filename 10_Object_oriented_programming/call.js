function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}
function createUsername(username,email,password){
    // SetUsername(username)                            // if you give only this for calling the outside object into this , it will not work
    SetUsername.call(this,username)                     // for calling this you have to wirte syntax like this- "fn.call(this,param)"

    this.email = email
    this.password = password
}
const my = new createUsername("Vikas", "Vikas@google.com", "123")
console.log(my);


// if you want to inject the function's data into another function , use "fn.call(this,param)"