let display = document.getElementById("display");
let currentInput = "";
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
    currentInput += number;
}

function setOperation(operation) {
    if (currentInput !== "") {
        firstOperand = parseFloat(currentInput);
        currentInput = "";
    }
    currentOperation = operation;
    display.innerText = firstOperand + " " + currentOperation;
}

function calculate() {
    if (currentInput === "" || firstOperand === null || currentOperation === null) return;

    let secondOperand = parseFloat(currentInput);
    let result;
    if (currentOperation === "+") {
        result = firstOperand + secondOperand;
    } else if (currentOperation === "-") {
        result = firstOperand - secondOperand;
    }

    display.innerText = result;
    currentInput = result;
    currentOperation = null;
    firstOperand = null;
}
