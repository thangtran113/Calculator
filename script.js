function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function deleteLastChar() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function appendPercentage() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value) / 100;
    } catch (error) {
        resultField.value = 'Error!';
    }
}

function clearLastEntry() {
    const resultField = document.getElementById('result');
    const expression = resultField.value.trim();

    // Tìm phần tử cuối cùng (số hoặc phép toán)
    const newExpression = expression.replace(/[\d.]+$|[\+\-\*\/]$/, '').trim();

    resultField.value = newExpression;
}

function reciprocal() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = 1 / eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function square() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = Math.pow(eval(resultField.value), 2);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function squareRoot() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = Math.sqrt(eval(resultField.value));
    } catch (error) {
        resultField.value = 'Error';
    }
}

function toggleSign() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = -eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

