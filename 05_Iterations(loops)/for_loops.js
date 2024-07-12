// for

// for (let i = 0; j < array.length; index++) {
//     const element = array[index];
    
// }


for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("I mark on five");
    } 
    // console.log(element);                      // 0 1 2 3 4 5 I mark on five 6 7 8 9
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}



let myArray = ["flash", "hulk", "ironman", "superman"]

for (let index = 0; index < myArray.length; index++) {

    const element = myArray[index];
    // console.log(element);                                 // flash hulk ironman superman
}




// ****************************** break and continue *****************************************




// for (let index = 1; index <= 20; index++){
//     if (index == 5) {
//         console.log(`Detected 5`);                          // Detected 5
//         break;
//     }
//     console.log(`value of index is ${index}`);             // value of index is 1 to 4
// }
    



for (let index = 1; index <= 20; index++){
    if (index == 5) {
        console.log(`Detected 5`);                          // Detected 5
        continue;
    }
    console.log(`value of index is ${index}`);             // value of index is 1 to 4 Detected 5 value of index is 6 to 20
   
}


