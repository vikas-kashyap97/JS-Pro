//++++++++++++++++++++++++ Dates ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myDate = new Date()
console.log(myDate);                      // 2024-07-09T05:54:51:887Z
console.log(myDate.toString());           // Tue Jul 09 2024 05:56:56 GMT+0000 (Coordinated Universal Time)         
console.log(myDate.toDateString());       // Tue Jul 09 2024 
console.log(myDate.toISOString());        // 024-07-09T05:59:42.467Z
console.log(myDate.toJSON());             // 024-07-09T05:59:42.467Z
console.log(myDate.toLocaleString());     // 7/9/2024, 6:31:16 AM
console.log(myDate.toLocaleDateString()); // 7/9/2024

console.log(typeof myDate);               // Object

let myCreatedDate = new Date(2024,10,5)
console.log(myCreatedDate.toDateString());// Tue Nov 05 2024

let myCreatedDate1 = new Date(2024,10,5,7,5)
console.log(myCreatedDate1.toLocaleString());  // 11/5/2024, 7:05:00 AM

let myCreatedDate2 = new Date ("2024-11-05")
console.log(myCreatedDate2.toLocaleString());     // 11/5/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);                            // 1720506013006

console.log(myCreatedDate2.getTime());               // 1730764800000
console.log(Date.now());                             // 1720506192679
console.log(Math.floor(Date.now()/1000));            // 1720506343


let newDate = new Date()
console.log(newDate);                         // 2024-07-09T06:34:56.094Z
console.log(newDate.getMonth() + 1);          // 7
console.log(newDate.getDay());                // 2

newDate.toLocaleString('default', {
    weekday: "long",
})