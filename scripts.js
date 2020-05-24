
const currentOperation = document.querySelector("#current");

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const operators = document.querySelectorAll(".operators");
operators.forEach(operator => operator.addEventListener('click', displayOperator));

const AC = document.querySelector('#AC');
AC.addEventListener('click', displayClear);

const del = document.querySelector('#DEL');
del.addEventListener('click', displayDelete);

const equals = document.querySelector('#equals');
AC.addEventListener('click', equals);

function displayNumber(e){
  let numberClicked = document.createTextNode(e.target.id);
  currentOperation.appendChild(numberClicked);
}

function displayOperator(e){
  let operatorClicked = document.createTextNode(e.target.id);
  currentOperation.appendChild(operatorClicked);
}

function displayClear(){
  currentOperation.textContent = '';
}

function displayDelete(){
  let currentDisplayed = currentOperation.textContent;
  currentOperation.textContent = currentDisplayed.slice(0,-1);
}


function operate(operator, num1, num2) {
  if (operator == 'add'){
    add(num1, num2);
  }
  else if (operator == 'minus'){
    add(num1, num2);
  }
  else if (operator == 'multiply'){
    multiply(num1, num2);
  }
  else if (operator == 'divide'){
    divide(num1, num2);
  }
}


function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1/num2;
}