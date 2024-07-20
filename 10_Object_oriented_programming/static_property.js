class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createUniqueID(){
        return `123`
    }
}
const vikas = new User("Vikas")
// console.log(vikas.createUniqueID());

class Teacher extends User{
    constructor(username, email){
        super (username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "iphone@google.com")
iphone.logMe();                                                 // Username: iphone

console.log(iphone.createUniqueID());                           // TypeError: iphone.createUniqueID is not a function beacuse of "static" (it prevents the access)


// "static" (it prevents the access)
