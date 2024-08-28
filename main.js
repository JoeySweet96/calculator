let currentNum = '';
let num1 = '';
let num2 = '';
let operator = null;

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
    if (b === 0) {
        return 'Error';
    }
    return a / b;
}

function handleButtonClick(event) {
    const buttonValue = event.target.textContent;
    if (operator == null) {
        num1 += buttonValue;
    }
    else {
        num2 += buttonValue;
    }
    currentNum += buttonValue;
    document.querySelector('.screen').textContent = currentNum;
}

let buttons = document.querySelectorAll(".number");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleButtonClick);
}

function handleOperatorClick(event) {

    const buttonValue = event.target.textContent;
    operator = buttonValue;
    currentNum += buttonValue;

    document.querySelector('.screen').textContent = currentNum;
}

let opButtons = document.querySelectorAll(".operator");
for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click", handleOperatorClick);
}

function solve(firstNum, secondNum, operator) {
    let result;

    if (operator === '+') {
        document.querySelector('.screen').textContent =
            result = add(firstNum, secondNum);
    }
    else if (operator == '-') {
        document.querySelector('.screen').textContent =
            result = subtract(firstNum, secondNum);
    }
    else if (operator == '/') {
        document.querySelector('.screen').textContent =
            result = divide(firstNum, secondNum);
    }
    else {
        document.querySelector('.screen').textContent =
            result = multiply(firstNum, secondNum);
    }
    console.log(result);

    num1 = result;
    num2 = '';
    currentNum = '';
    operator = '';

}

let eqButton = document.querySelector(".solve");
eqButton.addEventListener("click", handleEqualsClick);

function handleEqualsClick() {
    if (num1 !== null && num2 !== null && operator !== null) {
        solve(parseInt(num1), parseInt(num2), operator);
    } else {
        document.querySelector('.screen').textContent = "Error";
    }
}

let clrButton = document.querySelector(".clear");
clrButton.addEventListener("click", clearCalc);

function clearCalc() {
    currentNum = '';
    num1 = '';
    num2 = '';
    operator = null;
    document.querySelector('.screen').textContent = '';
}

