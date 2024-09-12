let firstNnumber;
let anotherNumber;
let op = "";

function add(firstInput, secondInput) {
  firstInput = document.getElementById("firstNumber").value;
  secondInput = document.getElementById("secondNumber").value;
  // parseFloat(firstInput);
  // parseFloat(secondInput);
  let result = parseFloat(firstInput) + parseFloat(secondInput);
  alert(result);
  console.log(result);
  console.log(firstInput);
  console.log(secondInput);
  return result;
}
function subtract(a, b) {
  let input = document.getElementById("displayNumber").value;
  alert(input);
  return a - b;
}
function multiply(a, b) {
  let input = document.getElementById("displayNumber").value;
  alert(input);
  return a * b;
}

function divide(a, b) {
  let input = document.getElementById("displayNumber").value;
  alert(input);
  let result = a / b;
  if (b === 0) {
    return "You can't divide by 0!";
  }
  return result;
}
function clear(a, b) {
  let firstInput = document.getElementById("firstNumber").value;
  let secondInput = document.getElementById("secondNumber").value;
  input1 = "";
  input2 = "";
  alert(input1);
  console.log(input1);
  alert(input2);
  console.log(input2);
  return input1 & input2;
}
function operate(a, b, operator) {
  const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };
  return operations[operator](a, b);
}
