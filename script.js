let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = null;

function appendToDisplay(value) {
    if (display.textContent === '0' || currentInput === '0') {
        display.textContent = value;
        currentInput = value;
    } else {
        display.textContent += value;
        currentInput += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    previousInput = '';
    operation = null;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    display.textContent = previousInput + ' ' + operation;
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result;
    display.textContent = result;
    operation = null;
    previousInput = '';
}
