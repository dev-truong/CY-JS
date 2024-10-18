function getResult(operation) {
    const firstNumber = Number(document.querySelector('.num-1').value);
    const secondNumber = Number(document.querySelector('.num-2').value);
    let result;
    switch (operation) {
        case 'plus':
            result = firstNumber + secondNumber;
            break;
        case 'sub':
            result = firstNumber - secondNumber;
            break;
        case 'multiple':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            if(secondNumber === 0) {
                result = "Mau so phai khac 0";
            } else {
                result = firstNumber / secondNumber;
            }
    }
    document.getElementById('result').innerHTML = result;
}
