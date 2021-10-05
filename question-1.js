/*
Question 1: ES6 Features
Create a script with a function named lowerCaseWords that takes a mixed array
as input. The function will do the following.
- return a promise that is resolved or rejected
- filter the non-strings and lower case the remaining words
*/


const lowerCaseWords = (anyArray) => new Promise((resolve, reject) => {
    if(!anyArray || anyArray === 0 || !Array.isArray(anyArray)) {
        reject("Incorrect array provided");
    }
    resolve(anyArray.filter((nonString) => isNaN(nonString)).map((word) => word.toLowerCase()));
})


//input
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

//console.log(lowerCaseWords(mixedArray));

lowerCaseWords(mixedArray).then((success)=>console.log(success)).catch((error) => console.log(error))

