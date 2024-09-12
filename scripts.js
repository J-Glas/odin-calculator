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
  let input = document.getElementById("displayNumber").value;
  input = "";
  a = "";
  b = "";
  alert(input);
  console.log(input);
  return input;
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

