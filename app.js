function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('input-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputNumber = document.getElementById('input-number');
    if (isNaN(number)) {
        if (number == 'C') {
            inputNumber.value = ''
        }
    }
    else {
        const newNumber = inputNumber.value + number;
        inputNumber.value = newNumber;
    }
})

function checked() {
    const inputPin = document.getElementById('input-pin').value;
    const inputNumber = document.getElementById('input-number').value;
    const notifySucces = document.getElementById('notify-success')
    const notifyFail = document.getElementById('notify-fail')

    if (inputPin == inputNumber) {
        notifySucces.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else {
        notifyFail.style.display = 'block';
        notifySucces.style.display = 'none';
    }

}