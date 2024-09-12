function add(firstInput, secondInput) {
  firstInput = document.getElementById("firstNumber").value;
  secondInput = document.getElementById("secondNumber").value;
  let result = parseFloat(firstInput) + parseFloat(secondInput);
  console.log(result);
  return result;
}
function subtract(firstInput, secondInput) {
  firstInput = document.getElementById("firstNumber").value;
  secondInput = document.getElementById("secondNumber").value;
  let result = parseFloat(firstInput) - parseFloat(secondInput);
  return result;
}
function multiply(firstInput, secondInput) {
  firstInput = document.getElementById("firstNumber").value;
  secondInput = document.getElementById("secondNumber").value;
  let result = parseFloat(firstInput) * parseFloat(secondInput);
  return result;
}
function divide(firstInput, secondInput) {
  firstInput = document.getElementById("firstNumber").value;
  secondInput = document.getElementById("secondNumber").value;
  let result = parseFloat(firstInput) / parseFloat(secondInput);
  if (parseFloat(secondInput) === 0) {
    result = "You can't divide by 0!";
  }
  alert(result);
  return result;
}

function equals() {
  let resultAdd = add();
  console.log("equals_Test");
  console.log(`Add function:`,add());
  let output = document.getElementById("displayResult");
   output.innerHTML = resultAdd;
}

function changeColor(element, color) {
  element.style.backgroundColor = color;
  console.log("changeColortest");
}

function clearColor() {
  document.getElementById("Add").style.background = "#00008b";
  document.getElementById("Subtract").style.background = "#00008b";
  document.getElementById("Multiply").style.background = "#00008b";
  document.getElementById("Divide").style.background = "#00008b";
  document.getElementById("Equals").style.background = "#00008b";
  console.log("clearColorTest");
}
function clear() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("displayResult").value = "";
}
