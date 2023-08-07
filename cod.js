let resultElement = document.getElementById('result');
let currentInput = '';

function appendToResult(value) {
    currentInput += value;
    resultElement.value = currentInput;
}

function clearResult() {
    currentInput = '';
    resultElement.value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        resultElement.value = currentInput;
    } catch (error) {
        resultElement.value = 'Error';
    }
}
