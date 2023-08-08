/* session 1/calculator.js */

//npm install prompt-sync
const prompt = require("prompt-sync")();

//calculate answer
function performOperation(firstNum, secondNum, operation) {
  switch (operation) {
    //break statements not needed since this directly returns the value
    case "add":
      return firstNum + secondNum;
    case "subtract":
      return firstNum - secondNum;
    case "multiply":
      return firstNum * secondNum;
    case "divide":
      return firstNum / secondNum;
    case "modulo":
      return firstNum % secondNum;
    default:
      return `Error: Operation ${operation} not found`;
  }
}

let numOfCalculations = prompt(
  "How many calculations would you like to perform? "
);
//the prompt returns a string so we must convert it to an int
numOfCalculations = parseInt(numOfCalculations);

//loop through the calculations
for (let i = 0; i < numOfCalculations; i++) {
  //use parseFloat here just in case user enters a decimal
  let firstNum = prompt("Enter your first number: ");
  firstNum = parseFloat(firstNum);

  let secondNum = prompt("Enter your second number: ");
  secondNum = parseFloat(secondNum);

  //string
  let operation = prompt("Enter the desired operation: ");

  //output desired equation
  const equation = operation + " " + firstNum + " and " + secondNum;
  const result = performOperation(firstNum, secondNum, operation);

  //output results
  console.log("Operation " + i + ": " + equation + " = " + result + "\n");
}
