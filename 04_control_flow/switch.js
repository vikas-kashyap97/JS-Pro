// *********************** switch  ***********************

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3                                   // you can compare the case with strings also. ie.- month = "march" , case "march", console = "March" 

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");                    // Mrach
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case matched");
        break;
}
