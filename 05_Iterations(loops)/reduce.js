const myNums = [1, 2, 3]


// const sumNums = myNums.reduce(function (Accumulator, currVal) {
//     console.log(`Accumulator: ${Accumulator} and currVal: ${currVal}`);
//     return Accumulator + currVal
// }, 0) 


const sumNums = myNums.reduce ( (acc, curr) => {
    return acc+curr
}, 0)


// console.log(sumNums);


const shoppingCart = [
    {
        itemName: "js course",
        price: 500
    },
    {
        itemName: "react course",
        price: 300
    },
    {
        itemName: "node course",
        price: 400
    },
    {
        itemName: "css course",
        price: 200
    },
    {
        itemName: "html course",
        price: 100
    }
];

const addPrice =shoppingCart.reduce( (acc,item ) => {
    return acc+item.price
},0)
console.log(addPrice);