
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor); 

console.log(Math.PI); // 3.141592653589793


Math.PI = 5;
console.log(Math.PI); // 3.141592653589793


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    orderchai: function() {
        console.log("chai nahi bani");
    }
}


console.log(Object.getOwnPropertyDescriptor(chai, "name"));        // Logs: { value: "ginger chai", writable: true, enumerable: true, configurable: true }

// Redefine the 'name' property to be non-enumerable
Object.defineProperty(chai, 'name', {
    // writable: false, 
    enumerable: false                           
});

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // Logs: { value: "ginger chai", writable: true, enumerable: false, configurable: true }


for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`); // Logs: price: 250 and isAvailable: true (name is not logged because it's non-enumerable)
    }
}
