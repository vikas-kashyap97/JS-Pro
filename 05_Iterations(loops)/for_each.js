// for each


const coding = ["js", "java", "ruby", "python", "cpp"]


// coding.forEach(  function (val) {
//     console.log(val);                                 // js java ruby python cpp
// })



// coding.forEach( (item) => {
//     console.log(item);                                // js java ruby python cpp
// } )



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)                                 // js java ruby python cpp




// coding.forEach( (item , index, array) => {
//     console.log(item, index, array);                        // js 0 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
//                                                             //   java 1 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
//                                                             //   ruby 2 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
//                                                             //   python 3 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
//                                                             //   cpp 4 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
// })


const myCoding = [
    {
       languageName: "javascript",
     languageFileName: "js"
    },
    {
       languageName: "ruby",
     languageFileName: "rb"
    },
    {
       languageName: "python",
     languageFileName: "py"
    },
]

myCoding.forEach ( (item) => {

    console.log(item.languageName);
})