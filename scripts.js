
function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1/num2
}


function operate(operator, num1, num2) {
  if (operator == '+'){
    add(num1, num2);
  }
  else if (operator == '-'){
    add(num1, num2);
  }
  else if (operator == '*'){
    multiply(num1, num2);
  }
  else if (operator == '/'){
    divide(num1, num2);
  }
}