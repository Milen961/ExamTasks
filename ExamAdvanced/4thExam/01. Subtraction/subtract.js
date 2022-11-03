function subtract() {
    let firtsElmentValue = document.getElementById('firstNumber').value
    let secondElementValue = document.getElementById('secondNumber').value
    let resultElement = document.getElementById('result');
    resultElement.textContent = Number(firtsElmentValue) - Number(secondElementValue)
}