function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = multiply(num1, num2);
        let result2 = division(num1, num2);
        let result3 = addition(num1, num2);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    debugger;
    return a * b;
}

function division(a, b) {
    return a / b;
}

function addition(a, b) {
    return a + b;
}

function displayResult(result){
    document.getElementById('result').textContent = `The result is: ${result}`;
}