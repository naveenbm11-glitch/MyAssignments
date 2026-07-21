console.log("********OddOrEvenNumbers*************");
// 1. Create a function named isOddOrEven that takes a number as a parameter
// 2. Declare and initialize the variable
// 3. Use a conditional statement to check if the number is divisible by 2
// 4. Call the function and print the result
// 1. Create a function named isOddOrEven that takes a number as a parameter
function isOddOrEven(number) {
    // 3. Use a conditional statement to check if the number is divisible by 2
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 2. Declare and initialize the variable
let myNumber = 7;

// 4. Call the function and print the result
let result = isOddOrEven();
console.log("The number " + myNumber + " is " + result + ".");  

