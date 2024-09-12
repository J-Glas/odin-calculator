let firstNnumber;
let anotherNumber;
let op = "";

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
// function operate(a, b, operator) {
//   const operations = {
//     "+": add,
//     "-": subtract,
//     "*": multiply,
//     "/": divide,
//   };
//   return operations[operator](a, b);
// }

function equals(result) {
  let returnAddResult = add(result);
  console.log(`equals:${returnAddResult}`);
  document.getElementById("displayResult").value = returnAddResult;
}

// function setColor(btn, color) {
//   document.body.style.background = "#FFFFFF";
// }
function changeColor(element, color) {
  element.style.backgroundColor = color;
  // document.getElementById("Add").style.backgroundColor = "red";
  console.log("test")
}