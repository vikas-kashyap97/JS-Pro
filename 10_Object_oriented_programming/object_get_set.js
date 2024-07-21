const User = {
    _email: 'vikas@vikas.com',
    _password: "abcdefgh",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);           // VIKAS@VIKAS.COM