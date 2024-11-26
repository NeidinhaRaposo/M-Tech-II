let numero = parseInt(prompt("Digite um número:"));

function verificarParidade(num) {
    if (num % 2 === 0) {
        return num + " é par.";
    } else {
        return num + " é ímpar.";
    }
}

console.log(verificarParidade(numero));
