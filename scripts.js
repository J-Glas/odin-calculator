let currentOperation = null;
let firstInput = null;

function add(firstInput, secondInput) {
  return parseFloat(firstInput) + parseFloat(secondInput);
}

function subtract(firstInput, secondInput) {
  return parseFloat(firstInput) - parseFloat(secondInput);
}

function multiply(firstInput, secondInput) {
  return parseFloat(firstInput) * parseFloat(secondInput);
}

function divide(firstInput, secondInput) {
  if (parseFloat(secondInput) === 0) {
    return "You can't divide by 0!";
  }
  return parseFloat(firstInput) / parseFloat(secondInput);
}

function equals() {
  let secondInput = document.getElementById("secondNumber").value;
  let result;
  switch (currentOperation) {
    case "+":
      result = add(firstInput, secondInput);
      break;
    case "-":
      result = subtract(firstInput, secondInput);
      break;
    case "*":
      result = multiply(firstInput, secondInput);
      break;
    case "/":
      result = divide(firstInput, secondInput);
      break;
    default:
      result = "Keine Operation ausgewählt";
  }
  document.getElementById("displayResult").value = result;
}
function changeColor(element, color) {
  element.style.backgroundColor = color;
}

function clearColor() {
  document.getElementById("Add").style.background = "#00008b";
  document.getElementById("Subtract").style.background = "#00008b";
  document.getElementById("Multiply").style.background = "#00008b";
  document.getElementById("Divide").style.background = "#00008b";
  document.getElementById("Equals").style.background = "#00008b";
}

function clear() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("displayResult").value = "";
  firstInput = null;
  currentOperation = null;
}

document.getElementById("Add").addEventListener("click", function() {
  firstInput = document.getElementById("firstNumber").value;
  currentOperation = "+";
  changeColor(this, 'red');
});

document.getElementById("Subtract").addEventListener("click", function() {
  firstInput = document.getElementById("firstNumber").value;
  currentOperation = "-";
  changeColor(this, 'red');
});

document.getElementById("Multiply").addEventListener("click", function() {
  firstInput = document.getElementById("firstNumber").value;
  currentOperation = "*";
  changeColor(this, 'red');
});

document.getElementById("Divide").addEventListener("click", function() {
  firstInput = document.getElementById("firstNumber").value;
  currentOperation = "/";
  changeColor(this, 'red');
});