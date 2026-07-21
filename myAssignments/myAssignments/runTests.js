//runTests need to take input as testType (string) and do not return any
 //- use switch case (smoke, sanity, regression, default (smoke))
 //- Print the values
function runTests(testType){
 switch (testType) {
    case "smoke":
        console.log("Running smoke tests...");
        break;
    case "sanity":
        console.log("Running sanity tests...");
        break;
    case "regression":
        console.log("Running regression tests...");
        break;
    default:
        console.log("Running smoke tests...");
}       
}
console.log("\n--- Testing runTests ---");
runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("performance");