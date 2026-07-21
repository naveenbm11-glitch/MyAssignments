//1. Create a function that takes a student's score as a parameter.
//2. Declare and initialize the variable.
//3. Use `switch` statement inside the function.
//4. Return the corresponding grade.
//5. Call the function and print the result.

function calculateGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = "A";
            break;
        case (score >= 80):
            grade = "B";
            break;
        case (score >= 70):
            grade = "C";
            break;
        default:
            grade = "D";
    }
    return grade;
}

console.log("\n--- Testing calculateGrade ---");
console.log("Score: 95, Grade: " + calculateGrade(95));
console.log("Score: 85, Grade: " + calculateGrade(85));
console.log("Score: 75, Grade: " + calculateGrade(75));
console.log("Score: 65, Grade: " + calculateGrade(65));     