
const equationDisplay = document.querySelector("#equationDisplay");
const totalDisplay = document.querySelector("#totalDisplay");


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

let equation = []; // eg ["12", "+", "2"]
let previous = "operator";
let totalInputted = 0;


function equationArray(type, key){
  if (type == "number" && previous == "number"){
    equation[equation.length - 1] += key;
    totalInputted++;
  }
  
  else if (type =="operator" && previous == "operator"){
    equation[equation.length - 1] = key;
  }
  
  else {
    equation.push(key);
    totalInputted++;
  }
}

function displayNumber(e){
  if (totalInputted > 25){
    return;
  }
  else {
    let number = e.target.id;
    equationArray("number", number);
    let numberClicked = document.createTextNode(number);
    equationDisplay.appendChild(numberClicked);
    previous = "number";
  }
}

function displayOperator(e){
  if (totalInputted > 25){
    return;
  }
  let operator = e.target.id;
  
  if (previous == "operator") {
    let currentDisplayed = equationDisplay.textContent;
    equationDisplay.textContent = currentDisplayed.slice(0,-1) + operator;
    equationArray("operator", operator)
  }
  
  else if (equationDisplay.textContent != ''){
    equationArray("operator", operator);
    let addClicked = document.createTextNode(operator);
    equationDisplay.appendChild(addClicked);
  }
  previous = "operator";

}

function displayClear(){
  equationDisplay.textContent = '';
  equation = [];
  totalDisplay.textContent = '';
  previous = '';
  totalInputted = 0;
}

function displayDelete(){
  let currentDisplayed = equationDisplay.textContent;
  if (equation[equation.length - 1].length > 1){
    equation[(equation.length - 1)] = equation[equation.length - 1].slice(0,-1);
    equationDisplay.textContent = currentDisplayed.slice(0,-1);
  }
  else { 
    equation.pop();
    equationDisplay.textContent = currentDisplayed.slice(0,-1);
  }
}

function operate(){
  let newArray;

  newArray = equation.map((str, index) => {
    if (index== 0 || index%2 == 0){
    return Number(str);
    }
    else {
      return str;
    }
  });


  while (newArray.length > 1){
    let newItem = 0;
    if (newArray.findIndex(key => key == "*" || key == "/") != -1) {
      i = newArray.findIndex(key => key == "*" || key == "/")
      if (newArray[i] == '*'){
        newItem = multiply(newArray[i - 1], newArray[i + 1]);
        newArray.splice(i-1, 3, newItem);  
      }
      else if (newArray[i] == '/'){
        newItem = divide(newArray[i - 1], newArray[i + 1]);
        newArray.splice(i-1, 3, newItem);  
      }

    }
    else {
      i = newArray.findIndex(key => key == "+" || key == "-")
      if (newArray[i] == '+'){
        newItem = add(newArray[i - 1], newArray[i + 1]);
        newArray.splice(i-1, 3, newItem);  
      }
      else if (newArray[i] == '-'){
        newItem = minus(newArray[i - 1], newArray[i + 1]);
        newArray.splice(i-1, 3, newItem);  
      }
    }
  }
  let rounded = parseFloat(newArray[0].toFixed(8));
  totalDisplay.textContent = rounded;

}

function add(num1, num2) {
	return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1/num2;
}
