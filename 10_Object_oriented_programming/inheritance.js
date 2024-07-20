// if you want to inject the constructor of a class into another class , use "super"


class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);   // A new course was added by chai
    }
}

const chai = new Teacher("chai","chai@google.com", "123")
chai.addCourses()

const masalachai = new User("Vikas")
masalachai.logMe()                                                    // USERNAME is Vikas

console.log(chai === User);                                           // false
console.log(chai === Teacher);                                        // false

console.log(chai instanceof User);                                    // true
console.log(chai instanceof Teacher);                                 // true