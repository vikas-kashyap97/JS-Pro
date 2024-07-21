// const myArr = []
// %DebugPrint(myArr)



// continious(Packed), Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// Packed_SMI_Element

arrTwo.push(6.0)
// Packed_Double_Element

arrTwo.push("7")
// Packed_Element

arrTwo[10] = 11
// Holey_Element

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// bound check

// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)


// Holes are very expensive in JS

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED   (H= Holey)


const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS



const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN)      // HOLEY_DOUBLE 
arrSix.push(Infinity) // HOLEY_DOUBLE 

