//Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
//corresponding string indicating the type.

let numberType = -4;
function type(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

let result = type(numberType);
console.log("The number " + numberType + " is " + result + ".");