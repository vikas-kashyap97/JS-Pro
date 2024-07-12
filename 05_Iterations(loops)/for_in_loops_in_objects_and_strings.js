// for in

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    css: 'cascading style sheet'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);             // js shortcut is for javascript
                                                                        // cpp shortcut is for c++
                                                                        // rb shortcut is for ruby
                                                                        // css shortcut is for cascading style sheet
    }


    const programming = ["js", "rb", "py", "java", "cpp"]
    for (const key in programming) {
    //    console.log(programming[key]);                                   // js rb py java cpp
        }



// const map = new Map() 
// map.set('IN' , "India")
// map.set('USA' , "United states of america")
// map.set('FR' , "France")
        
// for (const key in map) {
//     console.log(key);                      // not iterable for .map
// }