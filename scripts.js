
const equationDisplay = document.querySelector("#equationDisplay");

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const operators = document.querySelectorAll(".operators");
operators.forEach(operator => operator.addEventListener('click', displayOperator));

const AC = document.querySelector('#AC');
AC.addEventListener('click', displayClear);

const del = document.querySelector('#DEL');
del.addEventListener('click', displayDelete);

const equals = document.querySelector('#equals');
equals.addEventListener('click', operate);

let equation = []; // eg ["12", "+", "2", ]
let previous = '';

function equationArray(type, key){
  if (type == "number" && previous == "number"){
    equation[equation.length - 1] += key;
  }
  /*
  else if (previous == "operator"){
    equation[equation.length - 1] == key;
  }
  */
  else {
    equation.push(key);
  }
}

function displayNumber(e){
  let number = e.target.id;
  equationArray("number", number);
  let numberClicked = document.createTextNode(number);
  equationDisplay.appendChild(numberClicked);
  previous = "number";
}

function displayOperator(e){
  let operator = e.target.id;
  /*
  if (previous == "operator") {
    let currentDisplayed = equationDisplay.textContent;
    equationDisplay.textContent = currentDisplayed.slice(0,-1) + operator;
    equationArray("operator", operator)
  }
  */
  if (equationDisplay.textContent != ''){
    equationArray("operator", operator);
    let addClicked = document.createTextNode(operator);
    equationDisplay.appendChild(addClicked);
    previous = "operator";
  }
}

function displayClear(){
  equationDisplay.textContent = '';
  equation = [];
}

function displayDelete(){
  let currentDisplayed = equationDisplay.textContent;
  let equationL = equation[equation.length - 1]
  if (equationL.length > 1){
    equation[equation.length - 1] = equation[equation.length - 1].slice(0,-1); 
  }
  else if (equationL.length = 1){
    equation.pop();
  }
  equationDisplay.textContent = currentDisplayed.slice(0,-1);
}

function operate(){
  let total = 0;
  let newArray = [];
  for(let i=1; i < equation.length - 1; i++){ //loops through second to second last
    if (equation[i] == "*" || equation[i] == "/"){
      equation[i]
      total = equation[equation[i-1]] 
    }
  }
}
//check if every second array item is an operator, if not dont do anything || or create the condition to update operator if operator already present
//update array after each loop, collapsing three item eg 1 + 2, to 3


/*
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
*/