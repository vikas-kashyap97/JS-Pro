//ES6

function SetUsername(username){
    this.username = username
}

class User {
    constructor(username, email, password){
        SetUsername.call(this, username)
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Vikas", "vikas@google.com", "1234")

console.log(chai.encryptPassword());                  // 1234abcd
console.log(chai.changeUsername());                   // VIKAS






// behind the scene  


function User (username, email, password){
    SetUsername.call(this, username)
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("Vikas", "vikas@google.com", "1234")

console.log(tea.encryptPassword());                  // 1234abcd
console.log(tea.changeUsername());                   // VIKAS