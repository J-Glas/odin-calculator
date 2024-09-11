function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  let result = a / b;
  if (b === 0) {
    return "You can't divide by 0!";
  }
  return result;
}

function operate(a, b, operator) {
    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    };
    return operations[operator](a, b);
}
