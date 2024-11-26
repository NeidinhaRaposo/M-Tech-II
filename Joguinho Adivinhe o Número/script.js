let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function () {
    const userGuess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');

    attempts++;

    if (userGuess === randomNumber) {
        result.textContent = `Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas!`;
        document.getElementById('restart').style.display = 'block';
        document.getElementById('submitGuess').disabled = true;
    } else if (userGuess < randomNumber) {
        result.textContent = 'Tente um número maior!';
    } else {
        result.textContent = 'Tente um número menor!';
    }
});

document.getElementById('restart').addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('restart').style.display = 'none';
});
