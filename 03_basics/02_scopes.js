// var c = 300
let a = 200 
if (true) {
    let a =10
    const b = 20
    var c = 30
    // console.log("Inner: ", a);            // Inner:  10
}


// console.log(a);                           // 200 (when we define two let with same name, it renders only of global scope)
// console.log(b);                        // 20
// console.log(c);                        // 30  (var works in both block and global scope at the same time that's why we do not use it most of the time)



// Note - Block scope is a functionality in which the console.log only work in {} . if you are trying to console anything of the {} (outside), it will give you an error. 

function one (){
    const username = " Vikas"

    function two(){
       const website = "Youtube"
       // console.log(username);                 // Vikas
    }
    // console.log(website);                  // it will not console because of the block scope

    two()                                     // we are calling the function two and in that fuction we are consoling the usename that's why we are getting Vikas
}
one()                                         // we have to call the function one otherwise the function two will not work becuase everything is running into the fuction one




if (true) {                                   // true = it means you have to go into this function 
    const username = " Vikas"                 
    if (username === "Vikas") {               // username === "Vikas"- this condition is also true that's why again  you have to go into this function
        const website = " Youtube"
        // console.log(username + website);      // Vikas Youtube
    }
    
    // console.log(website);                     // it will not console because of the block scope
    
}
// console.log(username);                        // it will not console because of the block scope



// +++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++


console.log(addOne(4));                // 5 (here we are giving only a decleration that's why it will work)


function addOne(num){
    return num +1 
}



// addTwo()                            // addTwo' before initialization (here we are giving a decleration and holding it in a variable that's why it will not work)
const addTwo = function(num){
    return num + 2
}