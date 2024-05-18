const container = document.getElementById('container');

for (let i = 100; i > 0; i--) {
    const numberDiv = document.createElement('div');
    numberDiv.className = 'number';
    numberDiv.textContent = i;

    if (isEven(i)) {
        numberDiv.style.backgroundColor = 'green';
    } else if (isPrime(i)) {
        numberDiv.style.backgroundColor = 'red';
    } else {
        numberDiv.style.backgroundColor = 'yellow';
    }

    container.appendChild(numberDiv);
}

function isEven(num) {
    return num % 2 === 0;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}