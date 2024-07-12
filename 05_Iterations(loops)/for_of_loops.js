// for of 

["", "", ""]                          // strings in array
[{}, {}, {}]                          // objects in array

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);                 // 1 2 3 4 5 
}


// maps 


const map = new Map() 
map.set('IN' , "India")
map.set('USA' , "United states of america")
map.set('FR' , "France")

// console.log(map);                                    //Map(3) {
                                                         //    'IN' => 'India',
                                                         //    'USA' => 'United states of america',
                                                         //    'FR' => 'France'
                                                         //   }

for (const [key , value] of map) {
    // console.log(key, ':-' , value);                      // IN :- India USA :- United states of america FR :- France
}


const myObj = {
    'game1': 'Contra',
    'game2': 'Mario',
    'game3': 'NEED FOR SPEED',
    'game4': 'igi',
}

// for (const [key, value] of myObj) {
//     console.log(key , ':-' , value);
    
// }

// please visit the next file (for_of_loops_in_objects.js)

