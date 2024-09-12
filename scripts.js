let firstNnumber;
let anotherNumber;
let op = "";

function add(a, b) {
  let input = document.getElementById("displayNumber").value;
  alert(input);
  return a + b;
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
  let input1 = document.getElementById("firstNumber").value;
  let input2 = document.getElementById("secondNumber").value;
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

