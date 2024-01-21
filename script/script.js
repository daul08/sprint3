function convert() {
    let amount = parseInt(document.getElementById('amount').value);
    let val = document.getElementById('select').value;
    let input1 = document.getElementById('1');
    let input2 = document.getElementById('2');
    let input3 = document.getElementById('3');
    if (val === 'KZT') {
        input1.value = '-';
        input2.value = (amount / 431).toFixed(2);
        input3.value = (amount / 509).toFixed(2);
    }
    else if (val == 'USD') {
        input1.value = (amount * 429).toFixed(2);
        input2.value = '-';
        input3.value = (input1.value / 509).toFixed(2);
    }
    else if (val == 'EUR') {
        input1.value = (amount * 507).toFixed(2);
        input2.value = (input1.value / 431).toFixed(2);
        input3.value = '-';
    }
    let key = document.getElementById('amount');
    key.addEventListener('keydown', convert);
}
