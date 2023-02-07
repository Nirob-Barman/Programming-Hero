// Problem 1: Let’s play a mind game

// A JS program to perform arithmetic operations using Functions

// function mindGame(posNumber){
//     // posNumber*=3;
//     // posNumber+=10;
//     // posNumber/=2;
//     // posNumber-=5;
//     posNumber = (((posNumber*3)+10)/2)-5;
//     return posNumber;
// }
// console.log(mindGame(5));
// console.log(mindGame(50));
// console.log(mindGame(33));


// Problem 2: Finding even or odd

// A JS program to find whether the length of a given string is even or odd

// function evenOdd(number){
    
//     if (number.length %2 == 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.log(evenOdd("Phero"));
// console.log(evenOdd("Batch7"));
// console.log(evenOdd("chatgpt"));


// Problem 3: Is Less or Greater than seven

// A JS program to 

// function isLGSeven(number){
//     if ((number-7)<7) {
//         return number-7;
//     } else {
//         return 2*number;
//     }
// }
// console.log(isLGSeven(6))
// console.log(isLGSeven(-15))
// console.log(isLGSeven(15))

// Problem 4: Finding Bad data

// A JS program to count negative numbers from the given array

// function findingBadData(number) {
//     let negNumber = 0;
//     for (const num in number) {
//         if(number[num] < 0)
//             negNumber++;
//     }
//     return negNumber;
// }
// console.log(findingBadData([1,2,5]));
// console.log(findingBadData([2,-5,-7,-13]));
// console.log(findingBadData([-4,-9,-5,-33,-55]));

// Problem 5: Convert your gems into diamond



// function gemsToDiamond(friend1,friend2,friend3) {
//     let totalDiamond = friend1*21+friend2*32+friend3*43;
//     if (totalDiamond > 2000) {
//         return totalDiamond-2000;
//     } else {
//         return totalDiamond;
//     }
// }
// console.log(gemsToDiamond(1,1,1));
// console.log(gemsToDiamond(20,200,50));
// console.log(gemsToDiamond(100,5,1));