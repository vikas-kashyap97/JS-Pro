// const coding = ["js", "java", "ruby", "python", "cpp"]


// const values =  coding.forEach( (item) => {
//     console.log(item);                              // js java ruby pyhton cpp 
//     return item
// } )

// console.log(values);                                // undefined




// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) =>  {
//     return num > 4
// } ) 
// console.log(newNums);                                  // 5, 6, 7, 8, 9, 10

const newNums = []
 
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);                                    // 5, 6, 7, 8, 9, 10




const books = [
    { title: "Book One", genre: "Fiction", publish: 1993, edition: 1996 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1995, edition: 1998 },
    { title: "Book Three", genre: "History", publish: 1997, edition: 2000 },
    { title: "Book Four", genre: "Science", publish: 1999, edition: 2002 },
    { title: "Book Five", genre: "Fiction", publish: 2003, edition: 2006 },
    { title: "Book Six", genre: "Fantasy", publish: 2004, edition: 2007 },
    { title: "Book Seven", genre: "Biography", publish: 2007, edition: 2010 },
    { title: "Book Eight", genre: "Non-Fiction", publish: 2009, edition: 2012 },
    { title: "Book Nine", genre: "Science", publish: 2013, edition: 2016 },
    { title: "Book Ten", genre: "Fiction", publish: 2016, edition: 2019 },
    { title: "Book Eleven", genre: "Fantasy", publish: 2019, edition: 2022 },
    { title: "Book Twelve", genre: "Non-Fiction", publish: 2022, edition: 2025 },
    { title: "Book Thirteen", genre: "Biography", publish: 2024, edition: 2027 },
    { title: "Book Fourteen", genre: "History", publish: 1993, edition: 1996 },
    { title: "Book Fifteen", genre: "Fiction", publish: 1995, edition: 1998 },
    { title: "Book Sixteen", genre: "Science", publish: 1997, edition: 2000 },
    { title: "Book Seventeen", genre: "Fantasy", publish: 1999, edition: 2002 },
    { title: "Book Eighteen", genre: "Non-Fiction", publish: 2003, edition: 2006 },
    { title: "Book Nineteen", genre: "Fiction", publish: 2004, edition: 2007 },
    { title: "Book Twenty", genre: "Science", publish: 2007, edition: 2010 },
    { title: "Book Twenty-One", genre: "History", publish: 2009, edition: 2012 },
    { title: "Book Twenty-Two", genre: "Fantasy", publish: 2013, edition: 2016 },
    { title: "Book Twenty-Three", genre: "Non-Fiction", publish: 2016, edition: 2019 },
    { title: "Book Twenty-Four", genre: "Biography", publish: 2019, edition: 2022 },
    { title: "Book Twenty-Five", genre: "Fiction", publish: 2022, edition: 2025 }
  ];
  
  
  
  const userBooks = books.filter( (bk) => {
    return bk.genre == 'History'
  })
  // console.log(userBooks);
 

 const newuserBooks = books.filter( (bk) => {
    return bk.publish >= 2013 && bk.genre === "Science"
  })

  console.log(newuserBooks);